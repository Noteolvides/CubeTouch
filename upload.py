import os
import time
import serial.tools.list_ports
import serial

ser = serial.Serial(timeout=10)


def main():
    os.system("$HOME/bin/arduino-cli upload -p /dev/ttyUSB0 --fqbn CH55xDuino:mcs51:ch552 -i CustomFirmware.hex")

    time.sleep(0.5)
    print("Try to connect some device cubetouch")
    ports = list(serial.tools.list_ports.comports())
    for p in ports:
        if p.vid == 0x1209 and p.pid == 0xC6be:
            print("Found Device Serial")
            ser.port = p.device
            ser.open()
            firstFace = bytes([67, 0, 28, 18, 24, 122, 114, 58])

            secondFace = bytes([67, 1, 4, 21, 8, 128, 62, 62])

            thirdFace = bytes([67, 2, 23, 11, 8, 159, 159, 159])

            forthFace = bytes([67, 3, 5, 8, 22, 105, 167, 67])

            fifthFace = bytes([67, 4, 11, 12, 0, 85, 90, 159])

            ser.write(firstFace)
            time.sleep(0.1)
            ser.write(secondFace)
            time.sleep(0.1)
            ser.write(thirdFace)
            time.sleep(0.1)
            ser.write(forthFace)
            time.sleep(0.1)
            ser.write(fifthFace)
            time.sleep(0.1)
            ser.close()
            print("All data sent")


if __name__ == '__main__':
    main()
