VERSION=1.0.0-SNAPSHOT
DOCKERTAG=local/launchpad-ui:$(VERSION)

.PHONY: help docker run

help:
	$(info ---------------------------------------------------------)
	$(info make image: build a runnable launchpad-ui docker image)
	$(info make run: Runs docker image)
	$(info ---------------------------------------------------------)

image:
	docker build --no-cache -t $(DOCKERTAG) -f docker/Dockerfile .

run:
	docker run -d -p 8080:80 --add-host=dockerhost:172.17.0.1 -t $(DOCKERTAG)
