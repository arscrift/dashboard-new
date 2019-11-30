FROM node:10-alpine as builder
WORKDIR /app
COPY package*.json /app/
RUN npm install -g @angular/cli
RUN npm install
COPY ./ /app/
RUN ng build --output-path=dist

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY default /etc/nginx/sites-available/
COPY nginx.conf /etc/nginx/
COPY --from=builder /app/dist/ /usr/share/nginx/html
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]