#ifndef __LEDS_H__
#define __LEDS_H__

#include <Arduino.h>
#include <WS2812.h>
#include <stdint.h>



enum StatesLeds { LEDS_IDLE, LEDS_RAINBOW, LEDS_RAINBOW_BW, LEDS_FADEIN_INIT, LEDS_FADEIN, LEDS_FADEOUT_INIT, LEDS_FADEOUT };

extern __xdata uint8_t selectedRed;
extern __xdata uint8_t selectedGreen;
extern __xdata uint8_t selectedBlue;
extern __xdata uint8_t stateLeds;
extern __xdata uint8_t ledsWaitTime;


void initLeds();
void runLeds(unsigned long actualTime);

void showStrip();

#endif
