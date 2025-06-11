import socket

def createclient():
    client = socket.socket()
    client.connect(('localhost',3000))
    
    r = "GET http://localhost:3000 HTTP/1.1/r\n\r/n"
    client.send(r.encode())
    
    response = client.recv(1024).decode()
    print('recieved response')
    print(response)
    
    client.close()
createclient()
