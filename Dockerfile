
FROM node:current-alpine
COPY . /app
WORKDIR /app
EXPOSE 8080
ENV WEBSITES_PORT=8080
ENV PORT=8080
RUN npm install
ENTRYPOINT ["npm", "start"]