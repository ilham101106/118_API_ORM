const express = require('express')
const app = express();
const PORT = 3000;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// CREATE - tambah komik baru
app.post("/api/komik", async (req, res) => {
  try {
    const komik = await db.Komik.create(req.body);
    res.status(201).json({
      status: "success",
      data: komik
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});

// READ - ambil semua komik (dengan pagination)
app.get('/api/komik', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await db.Komik.findAndCountAll({
      limit: limit,
      offset: offset
    });

    res.status(200).json({
      status: "success",
      data: {
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        komik: rows
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});

// READ - ambil satu komik berdasarkan id
app.get('/api/komik/:id', async (req, res) => {
  try {
    const komik = await db.Komik.findByPk(req.params.id);
    if (!komik) {
      return res.status(404).json({ status: "error", message: "Komik tidak ditemukan" });
    }
    res.status(200).json({ status: "success", data: komik });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

// UPDATE - ubah data komik berdasarkan id
app.put('/api/komik/:id', async (req, res) => {
  try {
    const komik = await db.Komik.findByPk(req.params.id);
    if (!komik) {
      return res.status(404).json({ status: "error", message: "Komik tidak ditemukan" });
    }
    await komik.update(req.body);
    res.status(200).json({ status: "success", data: komik });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

// DELETE - hapus komik berdasarkan id
app.delete('/api/komik/:id', async (req, res) => {
  try {
    const komik = await db.Komik.findByPk(req.params.id);
    if (!komik) {
      return res.status(404).json({ status: "error", message: "Komik tidak ditemukan" });
    }
    await komik.destroy();
    res.status(200).json({ status: "success", message: "Komik berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

db.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started on port " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });