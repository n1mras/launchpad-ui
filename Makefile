VERSION=$(shell jq -r '.version' package.json)
DOCKERTAG=local/launchpad-ui:$(VERSION)
ENGINE?=docker

.PHONY: help docker run

help:
	$(info ---------------------------------------------------------)
	$(info make image: build a runnable launchpad-ui docker image)
	$(info make run: Runs the docker image on port 8080)
	$(info ---------------------------------------------------------)

image:
	$(ENGINE) build --pull --no-cache -t $(DOCKERTAG) -f docker/Dockerfile .

run:
	$(ENGINE) run -d -p 8080:80 --add-host=dockerhost:172.17.0.1 -t $(DOCKERTAG)
