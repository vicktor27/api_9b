import express from "express";
import { connectDB } from "./db.js";
import { Card } from "./models/Card.js";
const app = express();
connectDB();

app.use(express.json());

app.post("/createCard", async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card).send("Card created succesfully");
  } catch (error) {
    console.error(error);
  }
});

app.patch("/updateCard", async (req, res) => {
  try {
  } catch (error) {}
});

app.get("/getAllCards", async (req, res) => {
  try {
    const card = await Card.find();
    res.status(200).json(card).send("Card created succesfully");
  } catch (error) {
    console.error(error);
  }
});

app.get("/getCard/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const card = await Card.find();
    res.status(200).json(card).send("Card created succesfully");
  } catch (error) {
    console.error(error);
  }
});

//app representa al servidor,

app.get("/hello", (req, res) => {
  res
    .status(200)
    .send("Hola Mundo desde Node Js desde la PC del profe Victor, hackeadote");
});

app.get("/hola", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/send", (req, res) => {
  const { user, email } = req.body;
  console.log("Datos recibidos: " + user + " " + email);
  //
  res.status(200).send("Data received succesfuly");
});

app.listen(3000, () => {
  console.log("Servidor Ejecutandose en http://localhost:3000");
});
