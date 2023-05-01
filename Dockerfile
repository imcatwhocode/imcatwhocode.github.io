FROM node:20-alpine
EXPOSE 3000
COPY index.mjs index.mjs
CMD [ "node", "index.mjs" ]