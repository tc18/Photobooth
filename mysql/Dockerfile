# Use the official MySQL image from Docker Hub
FROM mysql:latest

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=1234
ENV MYSQL_DATABASE=Instagram
ENV MYSQL_USER=temp
ENV MYSQL_PASSWORD=temp

# Copy the initialization SQL script to the Docker image
COPY init.sql /docker-entrypoint-initdb.d/