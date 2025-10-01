# Etapa 1: Construção da aplicação Angular
FROM node:20 AS builder

WORKDIR /app

# Copiar arquivos necessários para instalar dependências
COPY package.json package-lock.json ./
RUN npm install

# Copiar todo o código-fonte e construir a aplicação
COPY . .
RUN npm run build --prod

# Etapa 2: Configuração do NGINX para servir os arquivos estáticos
FROM nginx:alpine

# Copiar configuração personalizada do NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remover arquivos padrão do NGINX e adicionar os arquivos da aplicação
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/front-contas-apagar/browser /usr/share/nginx/html

# Ajustar permissões para evitar erros de acesso
RUN chmod -R 755 /usr/share/nginx/html

# Expor a porta 80 para o tráfego HTTP
EXPOSE 80

# Comando para iniciar o NGINX
CMD ["nginx", "-g", "daemon off;"]
