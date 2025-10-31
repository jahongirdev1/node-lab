# Node-Lab — CRUD API на Express и SQLite

Простой сервер REST API, созданный с использованием Node.js, Express и SQLite (better-sqlite3).
Проект демонстрирует базовые операции CRUD (создание, чтение, обновление, удаление) и подходит как пример минимального бэкенда для небольших приложений.

---

## О проекте

Node-Lab — это учебный проект, показывающий, как организовать работу с базой данных SQLite через Express без использования ORM.
API реализует простые операции с таблицей todos и хранит данные в локальном файле todos.db.

**Основные возможности:**

- REST API на Express.js
- Хранение данных в SQLite
- CRUD-операции
- Настройка через .env
- Автоматический перезапуск с nodemon
- Подготовлено к тестированию (Jest, Supertest)

---

## Структура проекта

```
node-lab/
├── src/
│   ├── index.js
│   ├── routes/
│   │   └── todos.js
│   ├── lib/
│   │   └── db.js
│   └── data/
│       └── todos.db
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## Установка и запуск

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/jahongirdev1/node-lab.git
   cd node-lab
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Создайте файл `.env`:

   ```bash
   PORT=3000
   ```

4. Запустите сервер:
   ```bash
   npm run dev
   ```

После запуска вы увидите:

```
Connected to SQLite database (better-sqlite3)
Server running on http://localhost:3000
```

---

## API маршруты

| Метод      | URL              | Описание                     |
| ---------- | ---------------- | ---------------------------- |
| **GET**    | `/api/todos`     | Получить все записи          |
| **GET**    | `/api/todos/:id` | Получить запись по ID        |
| **POST**   | `/api/todos`     | Создать новую запись         |
| **PUT**    | `/api/todos/:id` | Обновить существующую запись |
| **DELETE** | `/api/todos/:id` | Удалить запись               |

**Пример тела POST-запроса:**

```json
{
  "title": "Изучить Node.js",
  "done": 0
}
```

---

## Используемые технологии

- Node.js v18+
- Express.js 5
- better-sqlite3
- dotenv
- nodemon
- jest / supertest

---

## Лицензия

Проект распространяется под лицензией [ISC License](https://opensource.org/licenses/ISC).

---

## Автор

**jahongirdev1**
Астана, Казахстан
GitHub: [github.com/jahongirdev1](https://github.com/jshongirdev1)
