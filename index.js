import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var isSubmitted = false;
function submitted() {
  setTimeout(() => {
    isSubmitted = true;
  }, 1500);
}

// Main Get Links
app.get("/", async (req, res) => {
  const response = await axios.get("http://localhost:3500/posts");
  const result = response.data;
  const recentPost = result[result.length - 1];

  res.render("index.ejs", {
    recentPost,
    data: result,
  });
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs", {});
});
app.get("/about", (req, res) => {
  res.render("about.ejs", {});
});
app.get("/blog", (req, res) => {
  res.render("blog.ejs", {});
});

app.delete("/", (req, res) => {
  console.log(req.body);
});

// BLOG Post request
app.post("/submit", async (req, res) => {
  submitted();
  try {
    axios.post("http://localhost:3500/posts", {
      title: req.body.title,
      topic: req.body.topic,
      descrip: req.body.description,
      author: req.body.author,
      body: req.body.body,
      date: req.body.date,
    });

    const response = await axios.get("http://localhost:3500/posts");
    const result = response.data;
    const recentPost = result[result.length - 1];

    res.render("index.ejs", {
      recentPost,
      data: result,
      isSubmitted,
    });
  } catch (err) {
    console.log(`Failed to make request: ${err.message}`);
    submitted = err.message;
    res.render("index.ejs", { submitted });
  }
});

// Topic Get Links
app.get("/art", (req, res) => {
  res.render("pages/art.ejs", {});
});
app.get("/business", (req, res) => {
  res.render("pages/business.ejs", {});
});
app.get("/culture", (req, res) => {
  res.render("pages/culture.ejs", {});
});
app.get("/education", (req, res) => {
  res.render("pages/education.ejs", {});
});
app.get("/family", (req, res) => {
  res.render("pages/family.ejs", {});
});
app.get("/finance", (req, res) => {
  res.render("pages/finance.ejs", {});
});
app.get("/food", (req, res) => {
  res.render("pages/food.ejs", {});
});
app.get("/games", (req, res) => {
  res.render("pages/games.ejs", {});
});
app.get("/health", (req, res) => {
  res.render("pages/health.ejs", {});
});
app.get("/media", (req, res) => {
  res.render("pages/media.ejs", {});
});
app.get("/nature", (req, res) => {
  res.render("pages/nature.ejs", {});
});
app.get("/pets", (req, res) => {
  res.render("pages/pets.ejs", {});
});
app.get("/relationship", (req, res) => {
  res.render("pages/relationship.ejs", {});
});
app.get("/religion", (req, res) => {
  res.render("pages/religion.ejs", {});
});
app.get("/sports", (req, res) => {
  res.render("pages/sports.ejs", {});
});
app.get("/technology", (req, res) => {
  res.render("pages/technology.ejs", {});
});
app.get("/world", (req, res) => {
  res.render("pages/world.ejs", {});
});

// LISTEN
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
