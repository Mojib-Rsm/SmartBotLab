FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build Next.js
RUN npm run build

# CMD শুধুমাত্র একটি, port ঠিকভাবে set
CMD ["npm", "start"]
