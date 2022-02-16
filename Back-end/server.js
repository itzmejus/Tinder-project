import express from "express";
import mongoose from "mongoose";
import Cors from 'cors'
import Cards from "./Schema/dbCardsSchema.js";
//App config
const app = express();
const port = process.env.PORT || 5000;
const dbURL =
  "mongodb+srv://justin:justinbro@cluster0.9f9un.mongodb.net/tinderdb?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
};

//Middleware
app.use(express.json());
app.use(Cors());

//DB config

mongoose.connect(dbURL, connectionParams);

//API Endpoints

app.get("/", (req, res) => res.status(200).send("hello server is here"));
app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/getcards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`server is running in ${port}`));
