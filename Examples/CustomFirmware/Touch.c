#include "Mapping.h"
#include "Leds.h"
#define TouchKeyQueryCyl2ms() {TKEY_CTRL |= bTKC_2MS;}                         //Touch button sampling period setting 2ms

#define KEY_ACT              1000

enum states {
  RELEASED,
  HOLDING,
  LONG_HOLD,
};

typedef struct {  // Check declaration of typedef
  uint8_t history;
  uint16_t downTime;
} stateBtn;

__xdata stateBtn stateButtons[5];  // Back,Right,Left,Front,Top
__xdata int16_t idleTouchValue[5];

#define DELAY 10
#define LOONG_PRESS 500


void touchBegin(){
  P1_DIR_PU &= 0x0C;
  setAll(255,0,0);
  showStrip();
  delay(2000);
  for (uint8_t j = 0; j < 10; j++) {
    for (uint8_t i = 0; i < 5; i++) {
        TKEY_CTRL = TKEY_CTRL & 0xF8 | (2 + i);
        while((TKEY_CTRL&bTKC_IF) == 0);
        idleTouchValue[i] = TKEY_DAT;
    }
  }
  
}

void initTouch() {
  touchBegin();
  for (uint8_t i = 0; i < 5; i++)
  {
    stateButtons[i].history = RELEASED;
    stateButtons[i].downTime = 0;
  }
}

unsigned long lastTimeTouch;
void runTouch(unsigned long actualTime) {
  if (actualTime - lastTimeTouch >= DELAY) {
    lastTimeTouch = actualTime;
    for (uint8_t i = 0; i < 5; i++) {
      TKEY_CTRL = TKEY_CTRL & 0xF8 | (2 + i);
      while((TKEY_CTRL&bTKC_IF) == 0);                                          
      int16_t touchResult = TKEY_DAT;
      bool active=(abs(touchResult-idleTouchValue[i])>KEY_ACT);
      switch (stateButtons[i].history) {
        case RELEASED:  // Not presed before
          if (!active)
            break;  // Not touched
          stateButtons[i].history = HOLDING;  // Touch detected
          stateButtons[i].downTime += DELAY;
          break;
        case HOLDING:                       // Touch detected before
          if (!active) {  // Is now relesed
            stateButtons[i].downTime = 0;
            stateButtons[i].history = RELEASED;
            dataKeys[i].simpleTouchFunction(i);
            dataKeys[i].effectFunction(i);
            break;
          }
          stateButtons[i].downTime += DELAY;             // Keeep touching
          if (stateButtons[i].downTime > LOONG_PRESS) {  // A long prees is detected
            stateButtons[i].downTime = 0;
            stateButtons[i].history = LONG_HOLD;
            dataKeys[i].longTouchFunction();
          }
          break;
        case LONG_HOLD:
          if (!active) {
            stateButtons[i].history = RELEASED;  // Have to wait to long press is released
          }
          break;
      }
    }
  }
}