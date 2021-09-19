FROM node:16-bullseye

WORKDIR /app
ENTRYPOINT ["npm", "run", "serve"]
EXPOSE 8080

COPY package*.json /app/
RUN npm install
COPY . .
USER 1000:1000
