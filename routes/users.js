const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const url = require("url");


const userdata = [];
router.get("/task/new", (req, res) => {
res.render("add-task", { title: "Adding page" });
});

router.post("/task", (req, res) => {
  const selectedFruits = req.body.fruit;

  const fruitsArray = Array.isArray(selectedFruits)
    ? selectedFruits
    : [selectedFruits];

  userdata.push({
    id: userdata.length + 1,
    taskname: req.body.taskname,
    subjectname: req.body.subjectname,
    situation: fruitsArray[0],
  });


  res.redirect("/");
});
router.get("/task/:id/edit", (req, res) => {
  const userId = parseInt(req.params.id);
  res.render("edit-page", { title: "Editing page", users: userId });
});
router.post("/task/:id/update", (req, res) => {
  const number = parseInt(req.params.id) - 1;

  userdata[number].taskname = req.body.taskname;
  userdata[number].subjectname = req.body.subjectname;
  const selectedFruits = req.body.fruit;

  const fruitsArray = Array.isArray(selectedFruits)
    ? selectedFruits
    : [selectedFruits];
  userdata[number].situation = fruitsArray[0];
  res.redirect("/");
});
router.get("/task/:id/delete", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = userdata.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    userdata.splice(userIndex, 1); 

    return res.redirect("/");
  } else {
    res.status(404).send({ message: "Foydalanuvchi topilmadi" });
  }
});

exports.router = router;
exports.expdata = userdata;
