import socket
# host = '192.168.104.212'
host = socket.gethostname()
port=6000
filename = 'File1.txt'

client = socket.socket()
client.connect((host,port))

client.send(filename.encode())
with open(filename,"rb") as f:
    data = f.read(1024)
    while data:
        client.send(data)
        data = f.read(1024)
        
print(f"File {filename} sent successfully")        
client.close()
