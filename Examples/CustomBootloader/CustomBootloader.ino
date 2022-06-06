/*
  Custom Botloader

  A simple example that shows how to jump to the bootloader address to make it reprogrammable.
  You can send the character B, or connect the pin 11 to GND.

  created 2022
  by Noteolvides for use with CH55xduino

  This example code is in the public domain.
*/

#ifdef USER_USB_RAM
#error "This example needs to be compiled with a Default CDC setting"
#error "Tools--> USB Settings--> Default CDC"
#endif

void jump_to_bootloader() {
  USB_INT_EN = 0;   // USB interrupt disable
  USB_CTRL = 0x06;  // USB base control Reset
  delay(100);
  EA = 0;                    // Disable all interrupts
  __asm__("lcall #0x3800");  // Jump to bootloader code
  while (1);
}

void setup() {
  pinMode(11, INPUT_PULLUP);
}

void loop() {
  while (USBSerial_available()) {
    char serialChar = USBSerial_read();
    char inputUP = digitalRead(11);
    if (serialChar == 'B' || inputUP == 0) {
      jump_to_bootloader();
    }
  }
}
