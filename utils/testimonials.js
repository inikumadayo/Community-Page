const fs = require(`fs`);

// Load testimonials
const loadTestimonials = () => {
  const fileBuffer = fs.readFileSync(`data/testimonials.json`, `utf-8`);
  const testimonials = JSON.parse(fileBuffer);
  return testimonials;
};

// Replace testimonials.json
const saveTestimonials = (testimonials) => {
  return fs.writeFileSync(
    `data/testimonials.json`,
    JSON.stringify(testimonials)
  );
};

// Add testimonial
const addTestimonial = (testimonial) => {
  const testimonials = loadTestimonials();
  testimonials.push(testimonial);
  return saveTestimonials(testimonials);
};

module.exports = { loadTestimonials, addTestimonial };
