import socket

def createServer():
    c = socket.socket()
    c.bind(('localhost',3000))
    c.listen()
    while True:
        conn,addr = c.accept()
        r = conn.recv(5000).decode()
        data = "HTTP/1.1.200 OK\n"
        data+= "Content-Type: text/html;charset-utf-8\n\n"
        data+= "<html><body>Helloo</body></html>\n\n"
        conn.send(data.encode())
    c.close()

print("http://localhost:3000")
createServer()
