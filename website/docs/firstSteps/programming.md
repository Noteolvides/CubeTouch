---
sidebar_position: 1
---

# Program your device

CubeTouch is build with a ch552 microcontroller, a super cheap but powerful microcontroller.

The *"official"* compiler for this microcontroller is the CK51 but this compiler is only available as paid software.

That's why people like **[Blinkinlabs](https://github.com/Blinkinlabs/ch554_sdcc)**
and **[DeqingSun](https://github.com/DeqingSun/ch55xduino)** have created a port of the CH554 SDK, from Keli C51 to
SDCC (a free compiler).

The easiest way to start programing the **CubeTouch** is using **[ch55xduino](https://github.com/DeqingSun/ch55xduino)**
port for Arduino and this will be the follow explanation here.

You can follow the  **[ch55xduino](https://github.com/DeqingSun/ch55xduino)**  guide or stick with the following one
that will go a bit more in depth.

## Arduino board Integration.

First you must obtain the arduino IDE you can get it from **[here](https://www.arduino.cc/en/software)**.

Automatic IDE integration is supported via the Arduino Boards Manager. This is the recommended way of installation now.

Start the Arduino-IDE. In *File->Preferences*, *Settings* tab, enter

> https://raw.githubusercontent.com/DeqingSun/ch55xduino/ch55xduino/package_ch55xduino_mcs51_index.json

as an *Additional Boards Manager URL*.

* Open *Tools->Board:...->Boards Manager*
* Find Ch55xduino by typing 'ch' into the search line
* Click on the list entry
* Click on *Install*.

Now you should find a new entry *CH55x Boards* in the list at.

The smarter way to start creating you own code is to read some of the examples created for the CubeTouch. You can
check it out in the followings pages or **[here](https://github.com/Noteolvides/CubeTouch-Software/tree/master/CDC_KEYBOARD)**.

### For linux users

By default, Linux will not expose enough permission for Arduino to upload the code with the USB bootloader. Copy the
following code as a file with the name 99-ch55xbl.rules to /etc/udev/rules.d/. Otherwise, the upload tool may not find
the bootloader device.

```bash
# CH55x bootloader
# copy to /etc/udev/rules.d/

SUBSYSTEM=="usb", ATTRS{idVendor}=="4348", ATTRS{idProduct}=="55e0", MODE="0666"
```
and execute 

```bash
sudo usermod -a -G dialout $USER
```

### For windows Users.

![Zadig image](https://raw.githubusercontent.com/DeqingSun/ch55xduino/ch55xduino/docs/Zadig_bootloader_libusb.png)

[Zadig](https://zadig.akeo.ie/) is the recommended tool to install drivers in Windows. The bootloader (4348,55E0) should
be installed with libusb-win32 driver (WinUSB driver may not work on some computer).

![Zadig CDC image](https://raw.githubusercontent.com/DeqingSun/ch55xduino/ch55xduino/docs/Zadig_CDC.png)

You can use USB Serial (CDC) driver for the default CDC USB stack (1209,C550).

If you tried to emulate another type of USB device without changing the PID/VID, you may need to uninstall the device
before installing a new driver.



### Warnings ⚠️

To reprogram the CubeTouch we use the Ch55xduino USB bootloader this uses
the **[USB CDC](https://en.wikipedia.org/wiki/USB_communications_device_class)** that's why you can use any examples
that Ch55xduino provides except the ones that change the USB stack, ie:

- CDCinUserCode 📛
- CMSIS_DAP 📛
- HIDKeyboard 📛
- MassStorage 📛
- NoUsbExample 📛

If you want to change or use the examples mentioned above and want to reprogram the device later you have to add a back
door to be able to reprogram the device. For example calling this function when an input goes high.

```c
void jump_to_bootloader() {
    USB_INT_EN = 0;   // USB interrupt disable
    USB_CTRL = 0x06;  // USB base control Reset
    delay(100);
    EA = 0;                    // Disable all interrupts
    __asm__("lcall #0x3800");  // Jump to bootloader code
    while (1);
}
```

Furthermore, CubeTouch provide a **CDC + HID Keyboard USB** example that enables to use the virtual serial and the
keyboard emulation without losing the ability to reprogram the device. You can check it out
**[here](https://github.com/Noteolvides/CubeTouch-Software/tree/master/CDC_KEYBOARD)**.

#### Unreprogrammable device

If you have uploaded unreprogrammable code to your device you can reprogram it by desoldering the bottom pcb joints and
exposing the reprogram button. Then you must press the button while inserting the usb in to the computer this would make
the device jump automatically to the bootloader address.

