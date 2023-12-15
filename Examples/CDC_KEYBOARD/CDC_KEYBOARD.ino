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

#include "src/CUSTOM_USB/USBCDC.h"
#include "src/CUSTOM_USB/USBHIDKeyboard.h"


void setup() {
  USBInit();
}

void loop() {


  while (USBSerial_available()) {
    char serialChar = USBSerial_read();
    if ((serialChar != '\n') && (serialChar != '\r') ) {
      USBSerial_print_s("Recived:");
      USBSerial_println_c(serialChar);
      USBSerial_print_s("Sending next character....");
      USBSerial_println_c(serialChar+1);
      USBSerial_flush();
      delay(500);
      Keyboard_write(serialChar+1);
    } 
  }
}
