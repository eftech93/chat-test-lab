# Docker Container

## Building docker container

Command:

* docker build -t chat/fronend .

## Runnig docker container

Command: 

### docker run -p HostPort:InternalPort chat/frontend

Example:

docker run -p 8080:8080 chat/frontend

Default port for backend is 8080

### docker run -e REACT_APP_WS_PORT=WebScketPort -e PORT=InternalPort -p HostPort:InternalPort chat/backend

Example:

docker run -e REACT_APP_WS_PORT=4000 PORT=7000 -p 3000:7000 chat/backend

overrides default port from 3000 to 7000