const express = require('express')
const app = express();
const PORT = 3000;
const db = require('./models');
const Komik = db.Komik;

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// CREATE - tambah komik baru
app.post('/komik', async (req, res) => {
  try {
    const komik = await Komik.create(req.body);
    res.status(201).json(komik);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ - ambil semua komik
app.get('/komik', async (req, res) => {
  try {
    const komik = await Komik.findAll();
    res.status(200).json(komik);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ - ambil satu komik berdasarkan id
app.get('/komik/:id', async (req, res) => {
  try {
    const komik = await Komik.findByPk(req.params.id);
    if (!komik) return res.status(404).json({ message: 'Komik tidak ditemukan' });
    res.status(200).json(komik);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE - ubah data komik berdasarkan id
app.put('/komik/:id', async (req, res) => {
  try {
    const komik = await Komik.findByPk(req.params.id);
    if (!komik) return res.status(404).json({ message: 'Komik tidak ditemukan' });
    await komik.update(req.body);
    res.status(200).json(komik);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE - hapus komik berdasarkan id
app.delete('/komik/:id', async (req, res) => {
  try {
    const komik = await Komik.findByPk(req.params.id);
    if (!komik) return res.status(404).json({ message: 'Komik tidak ditemukan' });
    await komik.destroy();
    res.status(200).json({ message: 'Komik berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ error: err.message });
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