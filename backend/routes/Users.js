const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const User = require("../models/User");
const OpenEntry = require("../models/OpenEntry");
const PhotoEntry = require("../models/PhotoEntry");
const QA_Entry = require("../models/QA_Entry");
// const ImageSchema = require("../models/image")
// const PhotoUpload = require("../../client/src/components/journal-templates/PhotoUpload")
users.use(cors());
const UPLOAD_PATH = path.resolve(__dirname, "path/to/uploadedFiles");
const upload = multer({
  dest: UPLOAD_PATH,
  limits: { fileSize: 1000000, files: 5 },
});

process.env.SECRET_KEY = "secret";

users.post("/journal", (req, res) => {
  // const collection = mongodb.db("db").collection("OpenEntry")
  const email = req.body.email;
  // console.log("req.params: ", req.params)
  // console.log("REQ.body: ", req.body)
  console.log("EMAIL: ", email);

  OpenEntry.find({
    email,
  }).then((entries) => {
    console.log("ENTRIES: ", entries);
    return res.json({ entries });
  });
});

users.post("/templates", (req, res) => {
  const entryType = req.body.entryType ? req.body.entryType : null;
  const entry = req.body.entry ? req.body.entry : null;
  // const email = req.body.email ? req.body.email : null;

  console.log("entryType: ", entryType);
  console.log("entry: ", entry);
  // console.log('email: ', email);

  switch (entryType) {
    case "open":
      OpenEntry.create(entry).then((entry) => {
        console.log("entry: ", entry);
        return res.json({ entry });
      });
      break;
    case "photo":
      PhotoEntry.create(entry).then((entry) => {
        console.log("entry: ", entry);
        return res.json({ entry });
      });
      break;
    case "qa":
      QA_Entry.create(entry).then((entry) => {
        console.log("entry: ", entry);
        return res.json({ entry });
      });
      break;
    default:
      break;
  }
  // "open", "photo", "qa"
});

// upload image
users.post("/upload", upload.array("image", 5), (req, res, next) => {
  const images = req.files.map((file) => {
    return {
      filename: file.filename,
      originalname: file.originalname,
    };
  });
  users.insertMany(images, (err, result) => {
    if (err) return res.sendStatus(404);
    res.json(result);
  });
});
// get image with feildname instead
users.get("/:id", (req, res, next) => {
  ImageSchema.findOne({ _id: req.params.id }, (err, image) => {
    if (err) return res.sendStatus(404);
    fs.createReadStream(path.resolve(UPLOAD_PATH, image.filename)).pipe(res);
  });
});

// users.post("/upload", (req, res) => {
//   console.log("post")
//   upload(req, res, (err) => {
//     if (err) {
//       res.render("index", {
//         msg: err,
//         files: [],
//       })
//     } else {
//       if (req.file == undefined) {
//         res.render("index", {
//           msg: "Error: No File Selected!",
//           files: [],
//         })
//       } else {
//         res.render("index", {
//           msg: "File Uploaded!",
//           file: `uploads/${req.file.filename}`,
//           files: [],
//         })
//       }
//     }
//   })
// })

users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today,
  };
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then((user) => {
              res.json({ status: user.email + " registered!" });
            })
            .catch((err) => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

users.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440,
          });
          res.json({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            token: token,
            statuscode: 0,
          });
        } else {
          res.json({ error: "User does not exist" });
        }
      } else {
        res.json({ error: "User does not exist" });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

users.get("/logout", (req, res) => {
  try {
    console.log("logout successful!");
    res.json({ statusCode: 0 });
  } catch (err) {
    res.send(err);
  }
});

users.get("/profile/:email", (req, res) => {
  try {
    User.findOne({ email: req.params.email }, function (err, userInfo) {
      console.log(userInfo);
      res.json({
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        // email: userInfo.email,
      });
    });
  } catch (err) {
    console.log("error", err);
    res.send(err);
  }
});

module.exports = users;
