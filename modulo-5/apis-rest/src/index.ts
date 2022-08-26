import Express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, Users } from "./data";

let usersList = users;
const app = Express();
app.use(Express.json());
app.use(cors());

// endpoint que busque todos os usuários de uma lista.
app.get("/users", (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    if (!usersList) {
      errorCode = 405;
      throw new Error("Usuários não encontrados");
    }

    res.status(200).send(usersList);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

// endpoint que busque todos os usuários que tenham uma propriedade type específica, recebendo apenas um type por vez.

app.get("/users/roles", (req: Request, res: Response) => {
  let errorCode = 422;

  try {
    const typeUsers = req.body.type as string;

    const adminUsers = usersList.filter(
      (u) => u.type.toUpperCase() === typeUsers.toUpperCase()
    );

    res.status(200).send(adminUsers);
    console.log(req.query);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

// endpoint de busca usuário buscando por nome.

app.get("/users/:id", (req, res) => {
  let errorCode = 411;
  try {
    const name = req.body.name;
    const userSearch = usersList.filter((u) => u.name === name);
    res.status(200).send(userSearch);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

// Crie um endpoint que use o método POST para adicionar um item ao nosso conjunto de usuários.

app.post("/users", (req: Request, res: Response) => {
  let errorCode = 402;

  try {
    const { name, email, type, age } = req.body;
    const newUser = {
      id: usersList.length + 1,
      name,
      email,
      type,
      age,
    };
    usersList.push(newUser);
    res.status(200).send(usersList);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

// ===============================================================
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const adress = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${adress.port}`);
  } else {
    console.error(`Failure upon starting server`);
  }
});
