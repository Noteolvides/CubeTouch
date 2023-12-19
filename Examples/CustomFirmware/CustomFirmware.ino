/*
  CDC + HID Keyboard

  A simple examples echoes next character of data it receives.

  created 2022
  by Noteolvides for use with CH55xduino

  This example code is in the public domain.
*/


#ifndef USER_USB_RAM
#error "This example needs to be compiled with a USER USB setting"
#error "Tools--> USB Settings--> USER CODE w/266 USB Ram"
#endif

#include "Leds.h"
#include "Touch.h"
#include "Comunication.h"
#include "Mapping.h"

void setup() {
  initComunication();
  initLeds();
  initTouch();
  initMapping();
}

void loop() {
  unsigned long time = millis();
  runTouch(time);
  runLeds(time);
  runComunication(time);
}
