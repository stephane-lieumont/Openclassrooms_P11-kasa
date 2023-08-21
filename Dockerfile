FROM node as react-build
WORKDIR /app
COPY . ./

RUN yarn

ARG REACT_APP_DEMO
ENV REACT_APP_DEMO ${REACT_APP_DEMO}

RUN yarn build

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

COPY --from=react-build /app/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
