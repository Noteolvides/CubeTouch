#include "Mapping.h"
#include <TouchKey.h>

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
__xdata uint8_t idleTouchValue[5];

#define DELAY 10
#define LOONG_PRESS 2000

void initTouch() {
  for (uint8_t i = 0; i < 5; i++)
  {
    stateButtons[i].history = RELEASED;
    stateButtons[i].downTime = 0;
  }

    TouchKey_begin( (1 << 1) | (1 << 2) | (1 << 3) | (1 << 4) | (1 << 5) ); //Enable all 6 channels: TIN0(P1.0), TIN1(P1.1), TIN2(P1.4), TIN3(P1.5), TIN4(P1.6), TIN5(P1.7)
    //refer to AN3891 MPR121 Baseline System for more details
    TouchKey_SetMaxHalfDelta(5);      //increase if sensor value are more noisy
    TouchKey_SetNoiseHalfDelta(2);    //If baseline need to adjust at higher rate, increase this value
    TouchKey_SetNoiseCountLimit(10);  //If baseline need to adjust faster, increase this value
    TouchKey_SetFilterDelayLimit(5);  //make overall adjustment slopwer

    TouchKey_SetTouchThreshold(100);  //Bigger touch pad can use a bigger value
    TouchKey_SetReleaseThreshold(80); //Smaller than touch threshold
}

unsigned long lastTimeTouch;
void runTouch(unsigned long actualTime) {
  if (actualTime - lastTimeTouch >= DELAY) {
    lastTimeTouch = actualTime;
    TouchKey_Process();
    uint8_t touchResult = TouchKey_Get();
    for (uint8_t i = 0; i < 5; i++) {
      bool active = touchResult & (1 << (i+1));
      switch (stateButtons[i].history) {
        case RELEASED:  // Not presed before
          if (!active)
            break;  // Not touched
          stateButtons[i].downTime += DELAY;
          if(stateButtons[i].downTime>=DELAY*5){
            stateButtons[i].history = HOLDING;  // Touch detected
          }
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