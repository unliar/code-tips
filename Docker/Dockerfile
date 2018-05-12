FROM node:8.9-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY . .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]