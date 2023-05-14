import express from "express";
import cors from "cors";
import {
  createUser,
  getUserByEmail,
  getUserByID,
  getUserPassword,
  getUsers,
} from "./Database.js";
import * as dotenv from "dotenv"; 
dotenv.config()

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

//testovo
app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

//testovo
app.get("/users/email/:email", async (req, res) => {
  const email = req.params.email;
  const user = await getUserByEmail(email);
  if (!user) {
    res.status(404).send("User not found!");
  }
  res.send(user);
});

//testovo
app.get("/users/id/:id", async (req, res) => {
  const id = req.params.id;
  const user = await getUserByID(id);
  if (!user) {
    res.status(404).send("User not found!");
  }
  res.send(user);
});

//testovo
app.get("/password/:email", async (req, res) => {
  const email = req.params.email;
  const password = await getUserPassword(email);
  res.send(password);
});

//login
app.post("/login", async (req, res) => {
  const { EMAIL, PASSWORD } = req.body;
  const user = await getUserByEmail(EMAIL);
  if (!user) {
    res.status(404).send("User not found!");
    return;
  }
  const password = await getUserPassword(EMAIL);
  if (!PASSWORD || PASSWORD != password) {
    res.status(400).send("Wrong password!");
    return;
  }
  res.status(202).send(user);
});

//register
app.post("/register", async (req, res) => {
  const { FIRST_NAME, LAST_NAME, EMAIL, PASSWORD } = req.body;
  if (await getUserByEmail(EMAIL)) {
    res.status(400).send("User already exists!");
    return;
  }
  const user = await createUser(FIRST_NAME, LAST_NAME, EMAIL, PASSWORD);
  const returned_user = await getUserByEmail(EMAIL);
  res.status(201).send(returned_user);
});

app.listen(port, () => {
  console.log(`App listening at http://${process.env.SERVER_IP}:${port}`);
});
