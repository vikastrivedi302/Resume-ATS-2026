
import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.render("home", { title: "Home", page: "home" });
});

router.get("/services", (req, res) => {
  res.render("services", { title: "Services", page: "services" });
});

router.get("/skill", (req, res) => {
  res.render("skill", { title: "My Skills", page: "skill" });
});
router.get("/education", (req, res) => {
  res.render("education", { title: "My Education", page: "education" });
});
router.get("/project", (req, res) => {
  res.render("project", { title: "My Project", page: "project" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us", page: "contact" });
});


export default router;
