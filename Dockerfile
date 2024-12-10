FROM node:22.11.0-alpine
WORKDIR /incheon
COPY . .
RUN npm install
EXPOSE 3005
CMD ["npm", "start"]