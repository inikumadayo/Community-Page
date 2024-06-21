const express = require("express");
const { loadTestimonials, addTestimonial } = require(`./utils/testimonials`);
const app = express();
const port = 3000;

app.set("view engine", "pug");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get(`/home`, (req, res) => {
  const testimonials = loadTestimonials();

  res.render(`home`, {
    testimonials,
  });
});

app.post(`/home`, (req, res) => {
  addTestimonial(req.body);
  return res.redirect(`/home`);
});

app.listen(port, () => {
  console.log(`Community listening on port ${port}`);
});
