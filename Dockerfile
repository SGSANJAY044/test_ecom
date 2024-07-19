FROM node:18
WORKDIR /app
COPY ./package.json /app
RUN npm install --force --loglevel verbose
RUN npm dedupe --force
COPY . /app
EXPOSE 3000
CMD ["npm","start"]