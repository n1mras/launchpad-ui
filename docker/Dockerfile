FROM docker.io/node:17 AS build-stage

WORKDIR /opt/
COPY ./ /opt/
RUN npm install
RUN npm run build

FROM docker.io/httpd:2.4

RUN mkdir -p /var/www/html
COPY --from=build-stage /opt/build /var/www/html
COPY --from=build-stage /opt/docker/site.conf /usr/local/apache2/conf/site.conf
RUN echo "Include conf/site.conf" >> /usr/local/apache2/conf/httpd.conf
