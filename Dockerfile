FROM alpine:latest

LABEL description "Lightweight Nginx container based on Alpine Linux."

# developed for TheDifferent by Florian Kleber for terms of use have a look at the LICENSE file
MAINTAINER Florian Kleber <kleberbaum@erebos.xyz>

WORKDIR /var/www/

# add webapp
COPY build/* ./

# update, install and cleaning
RUN echo "## Installing base ##" && \
    echo "@main http://dl-cdn.alpinelinux.org/alpine/edge/main/" >> /etc/apk/repositories && \
    echo "@testing http://dl-cdn.alpinelinux.org/alpine/edge/testing/" >> /etc/apk/repositories && \
    echo "@community http://dl-cdn.alpinelinux.org/alpine/edge/community/" >> /etc/apk/repositories && \
    apk upgrade --update-cache --available && \
    \
    apk add --force \
        bash@main \
        nginx@main \
        tini@community \
    \
    && chown -R nobody.nobody /var/www \
    \
    && rm -rf /tmp/* /var/cache/apk/* /var/cache/distfiles/*

EXPOSE 80

# version w/ volume disabled
#VOLUME /var/www/wp-content

# add license
COPY LICENSE /

# add license
COPY nginx.conf /etc/nginx/

# deploy init script
COPY docker-entrypoint.sh /

# starting via tini as init
ENTRYPOINT ["/sbin/tini", "--", "/docker-entrypoint.sh"]

