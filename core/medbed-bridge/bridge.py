import serial
import json
import time

ser = serial.Serial('/dev/ttyUSB0', 9600)

while True:
    line = ser.readline().decode('utf-8').strip()
    try:
        data = json.loads(line)
        env = data.get("environment", "")
        print("Activating MedBed:", env)
        # Trigger lights/audio/motors based on profile
    except:
        print("Invalid data")
