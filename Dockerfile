FROM node as react-build

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

ARG PUBLIC_URL
ARG REACT_APP_DEMO

ENV PUBLIC_URL ${PUBLIC_URL}
ENV REACT_APP_DEMO ${REACT_APP_DEMO}

RUN yarn build

FROM nginx:alpine

COPY --from=react-build /app/build /usr/share/nginx/html
COPY --from=react-build /app/nginx/nginx.conf /etc/nginx/templates/default.conf.template

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
