import express, { Request, Response } from "express";
import cors from "cors";
import { products } from "./data";

/*
activity 1 = ✅
activity 2 = ✅
activity 3 = ✅
activity 4 = ✅
activity 5 = ✅
activity 6 = ✅
activity 7 = ✅
activity 8 = ❌
activity 9 = ❌
*/

const app = express();
app.use(express.json());
app.use(cors());

// activity 1 ✅

let list = products;

app.get("/test", (req: Request, res: Response) => {
  res.send("server is running");
});

// activity 3 ✅

app.post("/products/create", (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;

    if (!name) {
      res.status(401);
      throw new Error("Informe um nome");
    }
    if (!price) {
      res.status(401);
      throw new Error("informe um preço");
    }

    if (typeof name !== "string") {
      throw new Error("name deve ser do tipo string");
    }
    list.push({
      id: Date.now().toString(),
      name: name,
      price: price,
    });
    res.send(list);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
});

// activity 4 ✅

app.get("/products", (req: Request, res: Response) => {
  const iten = req.query.iten as string;
  if (iten) {
    res.send(list.filter((i) => i.name.includes(iten)));
  } else {
    res.send(list);
  }
});

// activity 5 ✅
app.put("/products/edit/:id/", (req: Request, res: Response) => {
  try {
    const { name, id, price } = req.body;
    const editList = list.map((i) => {
      if (i.id === id) {
        if (price) {
          i.price = price;
        }
        if (name) {
          i.name = name;
        }
      }
      return i;
    });
    res.send(editList);
  } catch (error: any) {
    res.send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("server is running in http://localhost:3003");
});

// activity 6 ✅

app.delete("/products/delete/:id", (req: Request, res: Response) => {
  try {
    const productDeleted = list.filter((i) => i.id !== req.params.id);
    res.send(productDeleted);
  } catch (error: any) {
    res.send({ message: error.message });
  }
});
