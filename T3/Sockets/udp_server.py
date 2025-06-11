import socket

host = socket.gethostname()
print(host)
port = 8000

ser = socket.socket(type=socket.SOCK_DGRAM)
ser.bind((host, port))

while True:
    print('Waiting for message....')
    data, addr = ser.recvfrom(1024)
    print('Received',data,'from',addr)
    msg = input('Enter msg: ')
    ser.sendto(msg.encode().addr)
ser.close()

# recvfrom <-> recv
# send <-> sendto
