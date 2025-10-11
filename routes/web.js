import express from "express";
const router = express.Router();

// 🏠 Home Page
router.get("/", (req, res) => {
  res.render("index", { title: "Home", page: "home" });
});

// 💼 Services Page
router.get("/services", (req, res) => {
  res.render("services", { title: "Services", page: "services" });
});

// ⚙️ Skills Page
router.get("/skill", (req, res) => {
  res.render("skill", { title: "My Skills", page: "skill" });
});

// 🎓 Education Page
router.get("/education", (req, res) => {
  res.render("education", { title: "My Education", page: "education" });
});

// 🚀 Project Page
router.get("/project", (req, res) => {
  res.render("project", { title: "My Projects", page: "project" });
});

// 📞 Contact Page
router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Me", page: "contact" });
});

export default router;
