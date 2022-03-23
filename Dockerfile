FROM node:18 as builder

WORKDIR /app
COPY . ./

RUN yarn
RUN yarn build

FROM nginx:1.23.1-alpine as run

COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
