const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getComment, getForm} = require('./controller')

app.get("/api/clientform", getForm);

app.get("/api/placeholder", getComment);

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.listen(4000, () => console.log("Server running on 4000"));
