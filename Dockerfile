# Указываем базовый образ
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --ignore-scripts

# Копируем остальные файлы
COPY . .

# Строим приложение
RUN npm run build

# Указываем каталога для раздачи статических файлов
WORKDIR /usr/src/app/dist

# Открываем порт
EXPOSE 3000

# Установите npx для запуска serve и json-server
RUN npm install -g serve json-server

# Запускаем оба сервера
CMD ["npx", "concurrently", "\"serve -s . -l 3000\"", "\"json-server --watch ./backend/db.json --port 3001\""]
