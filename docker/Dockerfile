FROM docker.io/httpd:2.4

RUN mkdir -p /var/www/html
COPY dist/ /var/www/html
RUN echo "Include conf/site.conf" >> /usr/local/apache2/conf/httpd.conf
COPY site.conf /usr/local/apache2/conf/site.conf
