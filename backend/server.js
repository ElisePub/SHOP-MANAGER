const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Magasin', {})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Article Schema and Model
const articleSchema = new mongoose.Schema({
  reference: { type: Number, required: true, unique: true },
  nom: { type: String, required: true },
  marque: { type: String, required: true },
  prix: { type: Number, required: true, min: 0 },
  categorie: { type: String, required: true, enum: ['enfant', 'junior', 'senior'] },
  tailles: { type: [Number], required: true, min: 0 },
  fournisseur: {
    nom: { type: String, required: true },
    ville: { type: String, required: true }
  },
  rayon: {
    numero: { type: Number, required: true },
    employe: { type: mongoose.Schema.Types.ObjectId, required: true },
    description: { type: String, required: true }
  }
});
const Article = mongoose.model('Article', articleSchema);

// Employé Schema and Model
const employeSchema = new mongoose.Schema({
  nom: { type: String, required: true }
});
const Employe = mongoose.model('Employe', employeSchema);

// Client Schema and Model
const clientSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  adresse: { type: String, required: true }
});
const Client = mongoose.model('Client', clientSchema);

// Facture Schema and Model
const factureSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, required: true },
  montant: { type: Number, required: true },
  articles: { type: [mongoose.Schema.Types.ObjectId], required: true }
});
const Facture = mongoose.model('Facture', factureSchema);


// routes articles
app.post('/articles', async (req, res) => {
  try {
    const article = new Article(req.body);
    const result = await article.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/articles', async (req, res) => {
  const { reference, categorie, rayon, prix } = req.query;
  let filter = {};

  if (reference) {
    filter.reference = reference;
  }
  if (categorie) {
    filter.categorie = categorie;
  }
  if (rayon) {
    filter['rayon.numero'] = rayon;
  }
  if (prix) {
    filter.prix = { $lte: Number(prix) };
  }

  try {
    const articles = await Article.find(filter);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching articles' });
  }
});


// route employe
app.post('/employe', async (req, res) => {
  try {
    const employe = new Employe(req.body);
    const result = await employe.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Routes for Client
app.post('/client', async (req, res) => {
  try {
    const client = new Client(req.body);
    const result = await client.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Routes for Facture
app.post('/facture', async (req, res) => {
  try {
    const facture = new Facture(req.body);
    const result = await facture.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});