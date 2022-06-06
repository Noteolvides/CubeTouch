/*
  Touch Graph

  A simple sketch that plots all the values coming from the 5 capacitive buttons.
  created 2022
  by Noteolvides for use with CH55xduino

  This example code is in the public domain.
*/



#ifdef USER_USB_RAM
#error "This example needs to be compiled with a Default CDC setting"
#error "Tools--> USB Settings--> Default CDC"
#endif

#define KEY_ACT              2500                                            

int16_t idleValue[5];                                                         //Touch idle value storage, used to compare the state of the key
int16_t actualValues[5];

void getIdleValue(){
  delay(2000); //Delay to let the user not to touch the cube.
  for (uint8_t i = 0; i < 5; i++)
  {
    TKEY_CTRL = TKEY_CTRL & 0xF8 | (i+2);
    while((TKEY_CTRL&bTKC_IF) == 0);                                          
    idleValue[i] = TKEY_DAT;
  } 
}

void setup() {
    P1_DIR_PU &= 0x0C;                                                         //All touch channels are set as floating input, and channels that are not used can be left unset
    getIdleValue();
    USBSerial_println_s("Back:Right:Left:Front:Top:");
}

void loop() {
  for (uint8_t i = 0; i < 5; i++)
  {
    TKEY_CTRL = TKEY_CTRL & 0xF8 | (i+2);
    while((TKEY_CTRL&bTKC_IF) == 0);                                          
    actualValues[i] = TKEY_DAT;
  } 
  USBSerial_print_s(abs(actualValues[0]-idleValue[0])>KEY_ACT ? "Back_ON:": "Back_OFF:");
  USBSerial_print_i(actualValues[0]);
  USBSerial_print_s(",");
  USBSerial_print_s(abs(actualValues[1]-idleValue[1])>KEY_ACT ? "Right_ON:": "Right_OFF:");
  USBSerial_print_i(actualValues[1]);
  USBSerial_print_s(",");
  USBSerial_print_s(abs(actualValues[2]-idleValue[2])>KEY_ACT ? "Left_ON:": "Left_OFF:");
  USBSerial_print_i(actualValues[2]);
  USBSerial_print_s(",");
  USBSerial_print_s(abs(actualValues[3]-idleValue[3])>KEY_ACT ? "Front_ON:": "Front_OFF:");
  USBSerial_print_i(actualValues[3]);
  USBSerial_print_s(",");
  USBSerial_print_s(abs(actualValues[4]-idleValue[4])>KEY_ACT ? "Top_ON:": "Top_OFF:");
  USBSerial_println_i(actualValues[4]);
  delay(10); //Mimic cpu Usage
}
