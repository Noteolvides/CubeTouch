import time
import serial
import serial.tools.list_ports

ser = serial.Serial(timeout=10)


def split(list_a, chunk_size):
    for i in range(0, len(list_a), chunk_size):
        yield list_a[i:i + chunk_size]


def autoUpload():
    # exec("$HOME/bin/arduino-cli upload -p /dev/ttyUSB0 --fqbn CH55xDuino:mcs51:ch552 -i ./build/CustomFirmware.ino.hex")
    time.sleep(0.1)
    ports = list(serial.tools.list_ports.comports())
    for p in ports:
        if p.vid == 0x1209 and p.pid == 0xc6be:
            print("Found Device")
            ser.port = p.device
            ser.open()
            data = "23/11/27/168/0/0/9/18/21/128/62/62/5/24/28/159/159/159/11/12/0/105/167/67/11/12/0/85/90/159"
            data_split = list(split(data.split('/'), 5))
            for i, subArray in enumerate(data_split):
                command = bytes('C', 'UTF-8')
                command += int(i).to_bytes(1,'little')
                for e in subArray:
                    command += int(e).to_bytes(1,'little')
                ser.write(command)
            ser.close()
            print("Done")


if __name__ == '__main__':
    autoUpload()
