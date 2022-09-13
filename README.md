# MyReads Project

This Is Book Shelf Management App Using React  

## Run using Docker

Build docker image from source:
```
docker build . -t <your docker hub username>/node-weather-app
```

Run:
```
docker run -p 80:80 <your docker hub username>/node-weather-app:latest
```
If port 80 is already in use on your host, you can specify e.g. `-p [YOURPORT]:80` instead. Example:

```
docker run -p 8070:8080 <your docker hub username>/node-weather-app:latest
```
