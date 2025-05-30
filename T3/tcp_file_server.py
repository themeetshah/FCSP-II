import socket
host = socket.gethostname()
port = 6000

server = socket.socket(type=socket.SOCK_STREAM)
server.bind((host,port))
server.listen()

conn,addr = server.accept()
print("Connection from",addr)

filename = conn.recv(1024).decode()

with open(filename,'wb') as f:
    while True:
        data = conn.recv(1024)
        if not data:
            break
        f.write(data)            
print(f"File {filename} recieved successfully")
conn.close()
