/*
  Easy RGB

  A simple example that receives an RGB hex value and displays it
  Send hex color following this format (R,G,B): #0B4F02
  created 2022
  by Noteolvides for use with CH55xduino

  This example code is in the public domain.
*/

#include <WS2812.h>
#include <stdio.h>

#define NUM_LEDS 6
#define COLOR_PER_LEDS 3
#define NUM_BYTES (NUM_LEDS * COLOR_PER_LEDS)

__xdata uint8_t ledData[NUM_BYTES];
__xdata char buffer[8];
uint8_t bufferPtr = 0;

void setAll(uint8_t r, uint8_t g, uint8_t b) {
  uint8_t i;
  for (i = 0; i < NUM_LEDS; i++) {
    set_pixel_for_GRB_LED(ledData, i, r, g, b);
  }
  neopixel_show_P3_4(ledData, NUM_BYTES);
}

uint8_t hex2int(char hex[3]) {
  uint8_t val = 0;
  while (*hex) {
    // get current character then increment
    char byte = *hex++;
    // transform hex character to the 4bit equivalent number, using the ascii table indexes
    if (byte >= '0' && byte <= '9')
      byte = byte - '0';
    else if (byte >= 'a' && byte <= 'f')
      byte = byte - 'a' + 10;
    else if (byte >= 'A' && byte <= 'F')
      byte = byte - 'A' + 10;
    // shift 4 to make space for new digit, and add the 4 bits of the new digit
    val = (val << 4) | (byte & 0xF);
  }
  return val;
}

void setup() {
  pinMode(34, OUTPUT);  // LEDS PIN
}

void sendColors() {
  char auxString[3];
  uint8_t r, g, b;
  auxString[0] = buffer[1];
  auxString[1] = buffer[2];
  auxString[2] = '\0';
  r = hex2int(auxString);
  auxString[0] = buffer[3];
  auxString[1] = buffer[4];
  auxString[2] = '\0';
  g = hex2int(auxString);
  auxString[0] = buffer[5];
  auxString[1] = buffer[6];
  auxString[2] = '\0';
  b = hex2int(auxString);
  setAll(r, g, b);
  USBSerial_println_s("Done! Just a remainter send hex color following this format : #0B4F02");
  USBSerial_flush();
}

void loop() {
  while (USBSerial_available()) {
    char serialChar = USBSerial_read();
    buffer[bufferPtr] = serialChar;
    bufferPtr++;
    if (bufferPtr == 7) {
      buffer[bufferPtr] = '\0';
      bufferPtr = 0;
      sendColors();
    }
    if ((serialChar == '\n') || (serialChar == '\r')) {
      buffer[bufferPtr] = '\0';
      bufferPtr = 0;
      break;
    }
  }
}
