import socket
host = socket.gethostname()
port = 5000

client = socket.socket()
client.connect((host, port))

msg = input('Enter msg to send: ')

while msg!='bye':
    client.send(msg.encode())
    data = client.recv(1024).decode()
    
    print('Received from server:',data)
    
    msg = input('Enter msg to send: ')
client.close()
