import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import axios from "axios";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var title = [];
var topic = [];
var descrip = [];
var author = [];
var body = [];
var date = [];

function PostedBlog(title, topic, descrip, author, body, date) {
  this.title = title;
  this.topic = topic;
  this.descrip = descrip;
  this.author = author;
  this.body = body;
  this.date = date;
}

function blogDetails(req, res, next) {
  title = req.body["title"];
  topic = req.body["topic"];
  descrip = req.body["description"];
  author = req.body["author"];
  body = req.body["body"];
  date = req.body["date"];

  next();
}

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(blogDetails);

// Main Get Links
app.get("/", (req, res) => {
  res.render("index.ejs", { __dirname, title, date, body, descrip });
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs", { __dirname });
});
app.get("/about", (req, res) => {
  res.render("about.ejs", { __dirname });
});
app.get("/blog", (req, res) => {
  res.render("blog.ejs", { __dirname });
});

// Post request BLOGS
app.post("/submit", (req, res) => {
  var submitted = "Success";

  var postedBlog = new PostedBlog(title, topic, descrip, author, body, date);
  posts.push(postedBlog);
  console.log(posts);

  res.render(
    "index.ejs",
    (res.locals = {
      __dirname,
      submitted,
      title,
      topic,
      descrip,
      author,
      body,
      date,
    })
  );
});

// Topic Get Links
app.get("/art", (req, res) => {
  res.render("pages/art.ejs", { __dirname });
});
app.get("/business", (req, res) => {
  res.render("pages/business.ejs", { __dirname });
});
app.get("/culture", (req, res) => {
  res.render("pages/culture.ejs", { __dirname });
});
app.get("/education", (req, res) => {
  res.render("pages/education.ejs", { __dirname });
});
app.get("/family", (req, res) => {
  res.render("pages/family.ejs", { __dirname });
});
app.get("/finance", (req, res) => {
  res.render("pages/finance.ejs", { __dirname });
});
app.get("/food", (req, res) => {
  res.render("pages/food.ejs", { __dirname });
});
app.get("/games", (req, res) => {
  res.render("pages/games.ejs", { __dirname });
});
app.get("/health", (req, res) => {
  res.render("pages/health.ejs", { __dirname });
});
app.get("/media", (req, res) => {
  res.render("pages/media.ejs", { __dirname });
});
app.get("/nature", (req, res) => {
  res.render("pages/nature.ejs", { __dirname });
});
app.get("/pets", (req, res) => {
  res.render("pages/pets.ejs", { __dirname });
});
app.get("/relationship", (req, res) => {
  res.render("pages/relationship.ejs", { __dirname });
});
app.get("/religion", (req, res) => {
  res.render("pages/religion.ejs", { __dirname });
});
app.get("/sports", (req, res) => {
  res.render("pages/sports.ejs", { __dirname });
});
app.get("/technology", (req, res) => {
  res.render("pages/technology.ejs", { __dirname });
});
app.get("/world", (req, res) => {
  res.render("pages/world.ejs", { __dirname });
});

// LISTEN
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
