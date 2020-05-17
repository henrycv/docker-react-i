FROM node:12.16.3-alpine3.9 as base
ENV NODE_ENV=production
# ADD https://github.com/krallin/tini/releases/download/v0.18.0/tini /tini
# RUN chmod +x /tini
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package*.json ./
RUN npm ci && npm cache clean --force 
COPY --chown=node:node . .


FROM base as dev
ENV NODE_ENV=dev
RUN npm install --only=development
CMD [ "npm", "start" ]


FROM base as prod
# ENTRYPOINT ["/tini", "--"]
CMD ["npm", "run", "build"]


FROM nginx:1.17.10-alpine as proxy
COPY --from=prod /app/build /usr/share/nginx/html