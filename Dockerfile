FROM node:18-alpine
# Create app directory
WORKDIR /app
# Copy package.json to /app, and Install app dependencies
COPY ./package.json ./
 
RUN npm install --only=production
# Copy rest of source code, and bundle it.
COPY . .
EXPOSE 3030
#Start the server
CMD ["npm", "run","server:prod"]