FROM nginx
COPY "./dist/first-homework" "/usr/share/nginx/html/"
EXPOSE 8080
