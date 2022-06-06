#include "Comunication.h"
#include "Mapping.h"
#include "src/CDC_KEYBOARD/USBCDC.h"

void initComunication() {
  USBInit();
}

enum StatesComunication {
  COMUNICATION_IDLE = 0,
  COMUNICATION_BOOTLOOADER = 'B',
  COMUNICATION_MAPPING_SET = 'C',
  COMUNICATION_MAPPING_GET = 'D',
};
unsigned long lastTimeComunication;
uint8_t stateComunication = COMUNICATION_IDLE;


void runComunication(unsigned long actualTime) {
  char face = 0;
  char aux;
  if (actualTime - lastTimeComunication > 15) {
    switch (stateComunication) {
      case COMUNICATION_IDLE:
        stateComunication = USBSerial_read();
        break;
      case COMUNICATION_BOOTLOOADER:
        USB_CTRL = 0;
        EA = 0;
        delay(1);
        __asm__("lcall #0x3800");  // Jump to bootloader code
        break;
      case COMUNICATION_MAPPING_SET:
        stateComunication = COMUNICATION_IDLE;
        face = USBSerial_read();
        USBSerial_println_c(face);
        aux = USBSerial_read();
        USBSerial_println_c(aux);
        dataKeys[face].firstKey = aux;
        eeprom_write_byte(OFSET_ROM+(face*10)+1, aux);
        aux = USBSerial_read();
        USBSerial_println_c(aux);
        dataKeys[face].secondKey = aux;
        eeprom_write_byte(OFSET_ROM+(face*10)+2, aux);
        aux = USBSerial_read();
        USBSerial_println_c(aux);
        dataKeys[face].thirdKey = aux;
        eeprom_write_byte(OFSET_ROM+(face*10)+3, aux);
        aux = USBSerial_read();
        USBSerial_println_c(aux);
        dataKeys[face].keyColorRed = aux;
        eeprom_write_byte(OFSET_ROM+(face*10)+4, aux);
        aux = USBSerial_read();
        USBSerial_println_c(aux);
        dataKeys[face].keyColorGreen = aux;
        eeprom_write_byte(OFSET_ROM+(face*10)+5, aux);
        aux = USBSerial_read();
        USBSerial_println_c(aux);
        dataKeys[face].keyColorBlue = aux;
        eeprom_write_byte(OFSET_ROM+(face*10)+6, aux);
        break;
      case COMUNICATION_MAPPING_GET:
        stateComunication = COMUNICATION_IDLE;
        USBSerial_print_c('#');
        for (uint8_t i = 0; i <= 4; i++)
        {
          for (uint8_t j = 1; j <= 6; j++)
          {
            uint8_t data =  eeprom_read_byte(OFSET_ROM+(i*10)+j);
            USBSerial_print_i(data);
            USBSerial_print_c('/');
          }
        }
        USBSerial_print_c('#');
        USBSerial_flush();
        break;
      default:
        stateComunication = COMUNICATION_IDLE;
        break;
    }
  }
}
