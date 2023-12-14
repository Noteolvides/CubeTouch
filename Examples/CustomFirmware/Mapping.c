#include "Mapping.h"
#include "src/CUSTOM_USB/USBHIDKeyboard.h"

#define Key_press(x) \
  if (x != 0)        \
    Keyboard_press_non_assci(x);

void dummyFunction() {}
void makeRainBow();
void makeEffect(uint8_t i);
void sendKeys(uint8_t i);



// Back,Right,Left,Front,Top
__xdata KeyMapping dataKeys[5] = {
    {0, 0, 0, 0x00, 0x00, 0xFF, sendKeys, dummyFunction, makeEffect},   // Back
    {0, 0, 0, 0x00, 0xFF, 0x00, sendKeys, dummyFunction, makeEffect},   // Right
    {0, 0, 0, 0xFF, 0x00, 0x00, sendKeys, dummyFunction, makeEffect},   // Left
    {0, 0, 0, 0xff, 0xff, 0xff, sendKeys, sayHelloWorld, makeEffect},   // Front
    {0, 0, 0, 0x80, 0x00, 0x80, sendKeys, makeRainBow, makeEffect}      // Top
};

void makeRainBow() {
  stateLeds = LEDS_RAINBOW;
  ledsWaitTime = 10;
}

void sayHelloWorld() {
  Keyboard_write_string("cubetouch.noteolvid.es\0");
}

void makeEffect(uint8_t i) {
  stateLeds = LEDS_FADEIN_INIT;
  selectedRed = dataKeys[i].keyColorRed;
  selectedGreen = dataKeys[i].keyColorGreen;
  selectedBlue = dataKeys[i].keyColorBlue;
  ledsWaitTime = 2;
}

void sendKeys(uint8_t i) {
  Key_press(dataKeys[i].firstKey);
  Key_press(dataKeys[i].secondKey);
  Key_press(dataKeys[i].thirdKey);
  Keyboard_releaseAll();
}

void readFaceROM(uint8_t face){
  dataKeys[face].firstKey = eeprom_read_byte(OFSET_ROM+(face*10)+1);
  dataKeys[face].secondKey = eeprom_read_byte(OFSET_ROM+(face*10)+2);  
  dataKeys[face].thirdKey = eeprom_read_byte(OFSET_ROM+(face*10)+3);  
  dataKeys[face].keyColorRed = eeprom_read_byte(OFSET_ROM+(face*10)+4);  
  dataKeys[face].keyColorGreen = eeprom_read_byte(OFSET_ROM+(face*10)+5);  
  dataKeys[face].keyColorBlue = eeprom_read_byte(OFSET_ROM+(face*10)+6);  
}

void initMapping(){
  readFaceROM(0);
  readFaceROM(1);
  readFaceROM(2);
  readFaceROM(3);
  readFaceROM(5);

  stateLeds = LEDS_FADEIN_INIT;
  selectedRed = 0xff;
  selectedGreen = 0xff;
  selectedBlue = 0xff;
  ledsWaitTime = 5;
}
