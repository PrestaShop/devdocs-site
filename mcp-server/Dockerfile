# Container image for the devdocs MCP server. Host-agnostic: the same image runs on
# Kubernetes, Cloud Run, or anything else that can start a container.

FROM node:22-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts
COPY src ./src
RUN npm run build

FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist/server.mjs ./server.mjs
USER node
EXPOSE 8080
CMD ["node", "server.mjs"]
