FROM node:12.13 as builder
WORKDIR /app
COPY ./package.json .
RUN yarn
COPY . .
RUN yarn build

ENTRYPOINT yarn start

# FROM node:12.13
# WORKDIR /etc/app
# COPY --from=builder /app/dist .
# COPY --from=builder /app/node_modules .
# COPY --from=builder /app/package.json .