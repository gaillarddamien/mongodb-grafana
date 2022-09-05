FROM node:16-alpine AS build
WORKDIR /build
COPY package*.json ./
RUN npm ci

COPY Gruntfile.js .
COPY server ./server
RUN npm run build



FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
COPY --from=build /build/node_modules ./node_modules
RUN npm install --omit=dev

COPY --from=build /build/dist/server /app

EXPOSE 3333
CMD ["node" ,"mongodb-proxy.js"]

