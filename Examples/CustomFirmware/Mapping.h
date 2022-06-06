#ifndef __MAPPINGS_H__
#define __MAPPINGS_H__

#include <Arduino.h>
#include <stdint.h>
#include "Leds.h"

#define OFSET_ROM 50 

typedef   void (*FunctionWithParameter)(uint8_t i);
typedef   void (*Function)();



typedef struct
{
    uint8_t firstKey;
    uint8_t secondKey;
    uint8_t thirdKey;
    uint8_t keyColorRed;
    uint8_t keyColorGreen;
    uint8_t keyColorBlue;
    FunctionWithParameter simpleTouchFunction;
    Function longTouchFunction;
    FunctionWithParameter effectFunction;
    //Pointer to function simple touch
    //Pointer to function long touch
    //Pointer to effect
}KeyMapping;

extern __xdata KeyMapping dataKeys[];

void initMapping();

#endif
