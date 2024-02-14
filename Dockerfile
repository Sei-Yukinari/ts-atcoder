FROM node:20.5.0

# Install Python
RUN apt-get update && \
    apt-get install -y python3 python3-pip \
 && pip3 install --break-system-packages online-judge-tools \
 && npm install -g atcoder-cli \
 && acc config default-test-dirname-format test \
 && acc config default-template
 && acc config default-task-choice all

# Set the working directory
WORKDIR /app

# Install Node.js dependencies first for caching
COPY package*.json ./
COPY template/ts ./

RUN npm install

# Copy the rest of the application files
COPY . .
