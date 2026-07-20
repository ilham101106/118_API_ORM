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
![POST](<img width="1536" height="593" alt="post" src="https://github.com/user-attachments/assets/0e361e2f-7d00-4494-b49e-ec2bbd17408a" />

)

**GET /api/komik**
![GET](<img 
width="1536" height="914" alt="get" src="https://github.com/user-attachments/assets/5ee90bbf-4dce-433a-9103-a911c64aa2f9" />
)

**GET /api/komik/:id**
![GET by ID](	<img 
<img width="1536" height="588" alt="delete" src="https://github.com/user-attachments/assets/f38ee63c-f925-4225-8daf-ef55d9d74859" />
)

**PUT /api/komik/:id**
![PUT](<img width="1536" height="600" alt="put" src="https://github.com/user-attachments/assets/7a6d879c-e1bc-460a-94e3-a80edfefa4d0" />

)

**DELETE /api/komik/:id**
![DELETE](<img
width="1536" height="588" alt="delete" src="https://github.com/user-attachments/assets/708934fb-8fd3-4b25-b226-c7b553e7b3fd" />)


