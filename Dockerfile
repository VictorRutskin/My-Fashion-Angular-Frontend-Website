FROM node:lts

COPY . /app

WORKDIR /app

RUN npm install

RUN npm install -g @angular/cli

RUN ng build

EXPOSE 4200

ENV NG_CLI_ANALYTICS="false"

ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0"]
