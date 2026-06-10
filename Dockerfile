FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN NODE_OPTIONS="--max-old-space-size=4096" npx vite build --mode production 2>&1 || \
    (echo 'Retrying build...' && NODE_OPTIONS="--max-old-space-size=4096" npx vite build --mode production 2>&1)
RUN test -d dist || (echo 'Build failed' && exit 1)

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
