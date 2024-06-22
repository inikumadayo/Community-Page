const express = require("express");
const { loadTestimonials, addTestimonial } = require(`./utils/testimonials`);
const { connectToDb, getDb } = require(`./mongoDB/db`);
const app = express();
const port = 3000;

// Set template engine
app.set("view engine", "pug");

// Middleware
app.use(express.static("public")); // Regist public file
app.use(express.urlencoded({ extended: true })); // Make readable

// Db connection
let db;

connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
    db = getDb();
  }
});

// Routes
app.get(`/home`, (req, res) => {
  let testimonials = [];

  db.collection("testimonials")
    .find()
    .forEach((testimonial) => testimonials.push(testimonial))
    .then(() => {
      res.status(200).render(`home`, {
        testimonials,
      });
    })
    .catch(() => res.status(500).json({ error: "Could not fetch the data" }));
});

app.post(`/home`, (req, res) => {
  let addTestimonial = req.body;

  db.collection("testimonials")
    .insertOne(addTestimonial)
    .then(() => res.redirect(`/home`))
    .catch(() => res.status(500).json({ error: "Could not fetch the data" }));
});
