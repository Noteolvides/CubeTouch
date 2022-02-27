/*
  Easy Touch

  A simple example that when detect a touch of a face prints the face that has received input from

  created 2022
  by Noteolvides for use with CH55xduino

  This example code is in the public domain.
*/
#include <TouchKey.h>


enum states {
  RELEASED,
  HOLDING,
  LONG_HOLD,
};

typedef struct {
  uint8_t history;
  uint16_t downTime;
} stateBtn;

__xdata stateBtn stateButtons[5];  // Back,Right,Left,Front,Top
const char* face[] = {"Back", "Right", "Left", "Front", "Top"};

#define DELAY 10
#define LOONG_PRESS 2000

void setup() {
  TouchKey_begin((1 << 1) | (1 << 2) | (1 << 3) | (1 << 4) |
                 (1 << 5));  // Enable all 6 channels: TIN0(P1.0), TIN1(P1.1), TIN2(P1.4),
                             // TIN3(P1.5), TIN4(P1.6), TIN5(P1.7)

  // In most cases you don't need to adjust parameters. But if you do, test with
  // TouchKeyTuneParameter example
  /*
    //refer to AN3891 MPR121 Baseline System for more details
    TouchKey_SetMaxHalfDelta(5);      //increase if sensor value are more noisy
    TouchKey_SetNoiseHalfDelta(2);    //If baseline need to adjust at higher rate, increase this
    value TouchKey_SetNoiseCountLimit(10);  //If baseline need to adjust faster, increase this value
    TouchKey_SetFilterDelayLimit(5);  //make overall adjustment slopwer

    TouchKey_SetTouchThreshold(100);  //Bigger touch pad can use a bigger value
    TouchKey_SetReleaseThreshold(80); //Smaller than touch threshold
  */
 for (uint8_t i = 0; i < 5; i++)
 {
   stateButtons[i].history = RELEASED;
   stateButtons[i].downTime = 0;
 }
 
}

void loop() {
  TouchKey_Process();
  uint8_t touchResult = TouchKey_Get();
  for (uint8_t i = 0; i < 5; i++) {
    switch (stateButtons[i].history) {
      case RELEASED:  // Not presed before
        if (!(touchResult & (1 << (i + 1))))
          break;  // Not touched
        USBSerial_print_s(face[i]);
        USBSerial_println_s(" Has been touched");
        stateButtons[i].history = HOLDING;  // Touch detected
        stateButtons[i].downTime += DELAY;
        break;
      case HOLDING:                       // Touch detected before
        if (!(touchResult & (1 << i + 1))) {  // Is now relesed
          USBSerial_print_s(face[i]);
          USBSerial_println_s(" Has been released");
          stateButtons[i].downTime = 0;
          stateButtons[i].history = RELEASED;
          break;
        }
        stateButtons[i].downTime += DELAY;             // Keeep touching
        if (stateButtons[i].downTime > LOONG_PRESS) {  // A long prees is detected
          USBSerial_print_s(face[i]);
          USBSerial_println_s(" it is still being press.");
          stateButtons[i].downTime = 0;
          stateButtons[i].history = LONG_HOLD;
        }
        break;
      case LONG_HOLD:
        if (!(touchResult & (1 << (i + 1)))) {
          stateButtons[i].history = RELEASED;  // Have to wait to long press is released
          USBSerial_print_s(face[i]);
          USBSerial_println_s(" Has been released");
        }
        break;
    }
    USBSerial_flush();
  }
  delay(DELAY);
}
