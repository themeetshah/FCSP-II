import socket

host = '192.168.104.229'
port = 8000

client = socket.socket(type=socket.SOCK_DGRAM)

while True:
    data = input('Enter data to send: ')
    if not data:
        break
    client.sendto(data.encode(), (host, port))
    print('Ready to receive data')
    data, addr = client.recvfrom(1024)
    if not data:
        break
    print('Received:',data.decode())
client.close()
