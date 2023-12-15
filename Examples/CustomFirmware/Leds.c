#include "Leds.h"
#include "Arduino.h"

#define NUM_LEDS 6
#define COLOR_PER_LEDS 3
#define NUM_BYTES (NUM_LEDS * COLOR_PER_LEDS)
// Public data
__xdata uint8_t selectedRed = 0x00;
__xdata uint8_t selectedGreen = 0x00;
__xdata uint8_t selectedBlue = 0x00;
__xdata uint8_t stateLeds = LEDS_IDLE;
__xdata uint8_t ledsWaitTime = 10; //Tills will mark how fast the animations will be

//Private data
unsigned long lastTimeLeds;
__xdata uint8_t ledData[NUM_BYTES];

uint8_t r;
uint8_t g;
uint8_t b;
uint8_t i;
uint8_t j;
uint8_t blinkLed;

#define POLYMASK_32 0xb4bcd35c
#define POLYMASK_31 0x7a5bc2e3
uint32_t lfsr32;
uint32_t lfsr31;

int shift_lsfr(uint32_t* lfsr, uint32_t polynomial_mask)
{
    int feedback = *lfsr & 1;
    *lfsr >>= 1;
    if (feedback) {
        *lfsr ^= polynomial_mask;
    }
    return *lfsr;
}

void init()
{
    lfsr32 = 0xabcde;
    lfsr31 = 0x23456789;
}

uint32_t get_random()
{
    shift_lsfr(&lfsr32, POLYMASK_32);
    uint32_t a = shift_lsfr(&lfsr32, POLYMASK_32);
    uint32_t b = shift_lsfr(&lfsr31, POLYMASK_31);
    return (a ^ b) & 0xffff;
}

void showStrip(){
  neopixel_show_P3_4(ledData, NUM_BYTES);
} 

void initLeds() {
  init();
  pinMode(34, OUTPUT);
}

void setAll(uint8_t r, uint8_t g, uint8_t b) {
  for (uint8_t w = 0; w < NUM_LEDS; w++) {
    set_pixel_for_GRB_LED(ledData, w, r, g, b);
  }
}

void Wheel(uint8_t WheelPos) {
  if (WheelPos < 85) {
    r = WheelPos * 3;
    g = 255 - WheelPos * 3;
    b = 0;
  } else if (WheelPos < 170) {
    WheelPos -= 85;
    r = 255 - WheelPos * 3;
    g = 0;
    b = WheelPos * 3;
  } else {
    WheelPos -= 170;
    r = 0;
    g = WheelPos * 3;
    b = 255 - WheelPos * 3;
  }
}

void runLeds(unsigned long actualTime) {
  if (actualTime - lastTimeLeds > ledsWaitTime) {
    lastTimeLeds = actualTime;
    switch (stateLeds) {
      case LEDS_IDLE:
        r = g = b = i = j = 0;
        setAll(r, g, b);
        showStrip();
        break;
      case LEDS_RAINBOW:
        for (i = 0; i < NUM_LEDS; i++) {
          Wheel(((i * 256 / 6) + j) & 255);
          set_pixel_for_GRB_LED(ledData, i, g, r, b);
        }
        showStrip();  // Possible to use other pins.
        if (j++ == 255)
          j = 0;
        break;
      case LEDS_RAINBOW_BW:
        for (i = 0; i < NUM_LEDS; i++) {
          Wheel(((i * 256 / 6) + j) & 255);
          set_pixel_for_GRB_LED(ledData, i, g, g, g);
        }
        showStrip();  // Possible to use other pins.
        if (j++ == 255)
          j = 0;
        break;
      case LEDS_FADEIN_INIT:
        j = 0;
        stateLeds = LEDS_FADEIN;
      case LEDS_FADEIN:
        r = (j / 256.0) * selectedRed;    // Chosed color
        g = (j / 256.0) * selectedGreen;  // Choosed color
        b = (j / 256.0) * selectedBlue;   // Chosed color
        setAll(r, g, b);
        showStrip();
        j += 3;
        if (j == 255)
          stateLeds = LEDS_FADEOUT_INIT;
        break;
      case LEDS_FADEOUT_INIT:
        j = 255;
        stateLeds = LEDS_FADEOUT;
      case LEDS_FADEOUT:
        r = (j / 256.0) * selectedRed;    // Chosed color
        g = (j / 256.0) * selectedGreen;  // Choosed color
        b = (j / 256.0) * selectedBlue;   // Chosed color
        setAll(r, g, b);
        showStrip();
        j -= 3;
        if (j == 0)
          stateLeds = LEDS_IDLE;
    }
  }
}