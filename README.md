# 118_API_ORM

## Tugas
Membuat program Express.js menggunakan ORM (Sequelize) dengan:
- Nama database: `perpustakaan`
- Nama tabel: `komik`
- Minimal 10 commit

## Tech Stack
Node.js, Express.js, Sequelize, PostgreSQL

## Instalasi
```bash
npm install
```

Buat file `.env`:
```env
DB_USER=postgres
DB_PASS=your_password
DB_DATABASE=perpustakaan
DB_HOST=localhost
DB_PORT=5432
DB_DIALECT=postgres
```

Jalankan migration lalu server:
```bash
npm start
```

## Endpoints
 
| Method | Endpoint |
|--------|----------|
| POST | `/api/komik` |
| GET | `/api/komik` |
| GET | `/api/komik/:id` |
| PUT | `/api/komik/:id` |
| DELETE | `/api/komik/:id` |

## Testing

## Testing (Postman)

**POST /api/komik**
![POST](<img width="1535" height="677" alt="image" src="https://github.com/user-attachments/assets/5a55c947-8956-468c-b727-9f05ab0eb088" />
)

**GET /api/komik**
![GET](<img width="1536" height="912" alt="image" src="https://github.com/user-attachments/assets/5b17f68c-4692-4398-9b58-1bdd4f5046ff" />
)

**GET /api/komik/:id**
![GET by ID](	http://localhost:3000/api/komik/1)

**PUT /api/komik/:id**
![PUT](<img width="1536" height="680" alt="image" src="https://github.com/user-attachments/assets/35a38485-83cd-4a89-b5e7-a961e378d1f6" />
)

**DELETE /api/komik/:id**
![DELETE](<img width="1536" height="543" alt="image" src="https://github.com/user-attachments/assets/e88e2b73-8c89-4951-be68-09047d71636f" />
)
