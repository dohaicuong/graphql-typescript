FROM node:12.13 as builder
WORKDIR /app
COPY ./package.json .
RUN yarn
COPY . .
RUN yarn build

FROM node:12.13
WORKDIR /etc/app
COPY --from=builder /app/dist/* /etc/app/
COPY --from=builder /app/node_modules .
ENTRYPOINT node server.js