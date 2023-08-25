FROM node:18-alpine as build
WORKDIR /app
COPY . .
# RUN npm install -g yarn
RUN yarn
RUN yarn run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 443