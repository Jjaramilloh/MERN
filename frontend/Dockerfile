# Usar la imagen de Node.js
FROM node:20.9.0

# Crear el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente al contenedor
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto 5173 (o el puerto que uses en desarrollo)
EXPOSE 3000

# Comando para iniciar Vite en modo preview
CMD ["npm", "run", "preview"]

