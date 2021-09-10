
FROM node:current-alpine
COPY . /app
WORKDIR /app
ENV PORT=8080
RUN npm install
ENTRYPOINT ["npm", "start"]