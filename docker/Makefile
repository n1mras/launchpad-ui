VERSION=1.0.0-SNAPSHOT
DOCKERTAG=local/launchpad-ui:$(VERSION)

all: build docker

help:
	cat Makefile

build:
	rm -rf dist
	cd ../ && npm run build
	cp -R ../build/ dist

docker:
	docker build --no-cache -t $(DOCKERTAG) .

docker-podman:
	podman build --no-cache -t $(DOCKERTAG) .

run:
	docker run -d -p 8080:80 --add-host=dockerhost:172.17.0.1 -t $(DOCKERTAG)

run-podman:
	podman run -d -p 8080:80 --add-host=dockerhost:172.17.0.1 -t $(DOCKERTAG)

bash:
	docker run -p 8080:80 --add-host=dockerhost:172.17.0.1 -ti $(DOCKERTAG) /bin/bash
