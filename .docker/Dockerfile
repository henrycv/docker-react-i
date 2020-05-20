FROM node:12.16.3-alpine3.9 as prod
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package*.json ./
RUN npm ci && npm cache clean --force 
COPY --chown=node:node . .
RUN npm run build
RUN pwd
RUN ls -la build
# CMD ["npm", "run", "build"]
# USER root
# CMD ["ping", "google.com"]


# FROM s as proxy
# COPY --from=prod /app/build /usr/share/nginx/html