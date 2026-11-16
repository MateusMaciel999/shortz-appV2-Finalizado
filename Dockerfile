FROM node:20-alpine

WORKDIR /app

# Dependências primeiro (aproveita cache de camadas)
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

# Pasta de uploads de imagens de perfil
RUN mkdir -p public/uploads

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Executa como usuário não-root
USER node

CMD ["node", "bin/www"]
