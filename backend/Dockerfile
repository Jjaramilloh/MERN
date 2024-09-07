# Usa una imagen base de Node.js
FROM node:20.9.0

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que corre el servidor
EXPOSE 5555

# Comando para iniciar el servidor
CMD ["npm", "start"]
