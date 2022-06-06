## What is it?
A cube made up of 6 PCBs that when soldered together form a cube universe.
CubeTouch is designed to create a beautiful object from PCBs but giving it all the functionality of a HID device, being able to interact with the computer as if it were a keyboard or any other HID device. 

![Insert Photo here](https://raw.githubusercontent.com/Noteolvides/CubeTouch/main/website/static/animation.gif "enter image title here")

CubeTouch is made up of the **CH552** micontroller and 6 WS2812 LEDs that illuminate the planets thanks to the diffusion of the FR4 material. This device is already loaded with a firmware that when pressing one of the 5 planets will send a combination of keys to the computer. These can be modified on the 

# Documentation and more
CubeTouch has its own [webPage](https://cubetouch.noteolvid.es/) where you can find, how to [program the device](https://cubetouch.noteolvid.es/docs/firstSteps/programming/), [examples](https://cubetouch.noteolvid.es/docs/firstSteps/examples/) and much more😊!

## Examples
### Custom Firmware
Default firmware that comes preload with the package. Its main function is to use as an external keyboard with shortcuts to increase your productivity in your daily work in the computer.
Each face is mapped with a possible combination of 3 keys, and a color to show that the keys were sent.
These can be remapped via the [web interface](https://cubetouch.noteolvid.es/keyRemapping/) thanks to [web serial](https://web.dev/serial/).
### [Easy RGB](https://cubetouch.noteolvid.es/docs/firstSteps/examples/#easy-rgb)
A simple example that receives an RGB hex value and displays it. Send hex color to the Serial Monitor following this format (R,G,B): #0B4F02
### [Chasse Lights](https://cubetouch.noteolvid.es/docs/firstSteps/examples/#chasse-text)
Moving lights.
### [Easy Touch](https://cubetouch.noteolvid.es/docs/firstSteps/examples/#easy-touch)
A simple example that when a face is touch prints the face that has received input from.
### [CDC and Keyboard](https://cubetouch.noteolvid.es/docs/firstSteps/examples/#cdc-and-keyboard)
This example echoes the next character of data it receives via the serial monitor and sends as a key also the next character send.
### [Custom Bootloader](https://cubetouch.noteolvid.es/docs/firstSteps/examples/#custom-bootloader)
This example that shows how to jump to the bootloader address to make it reprogrammable. You can send the character B, or connect the pin 11 to GND.
