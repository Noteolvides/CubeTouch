/*
  Easy RGB

  A simple example that no  needs configuration,
  just upload the sketch and enjoy the beautiful colors.
  by Noteolvides for use with CH55xduino

  This example code is in the public domain.
*/

#include <WS2812.h>

#define NUM_LEDS 6
#define COLOR_PER_LEDS 3
#define NUM_BYTES (NUM_LEDS*COLOR_PER_LEDS)

__xdata uint8_t ledData[NUM_BYTES];

void setup() {
  pinMode(34, OUTPUT); //Possible to use other pins. 
}

void loop() {

  for (uint8_t i = 0; i < NUM_LEDS; i++) {
    set_pixel_for_GRB_LED(ledData, i, 50, 0, 0); //Choose the color order depending on the LED you use. 
    neopixel_show_P3_4(ledData, NUM_BYTES); //Possible to use other pins. 
    delay(200);
  }
  for (uint8_t i = 0; i < NUM_LEDS; i++) {
    set_pixel_for_GRB_LED(ledData, i, 0, 50, 0);
    neopixel_show_P3_4(ledData, NUM_BYTES);
    delay(200);
  }
  for (uint8_t i = 0; i < NUM_LEDS; i++) {
    set_pixel_for_GRB_LED(ledData, i, 0, 0, 50);
    neopixel_show_P3_4(ledData, NUM_BYTES);
    delay(200);
  }

}
