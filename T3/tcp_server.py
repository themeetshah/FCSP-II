import socket
host = socket.gethostname()
port = 5000

# server = socket.socket() # by default tcp socket
server = socket.socket(type=socket.SOCK_STREAM) # for tcp
server.bind((host, port))
server.listen()

conn, addr = server.accept()
print('Connection from:',addr)

while True: 
    data = conn.recv(1024).decode()
     if not data:
         break
    print('From connected user:', data)
    data = input('Enter Response: ')
    conn.send(data.encode())
conn.close()
