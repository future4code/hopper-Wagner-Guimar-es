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
      // se a lista de usuarios não conter nada...
      errorCode = 405;
      throw new Error("Usuários não encontrados");
    }

    if (!usersList.length) {
      // se a lista de usuários for false...
      errorCode = 252;
      throw new Error("Lista de usuários está vazia");
    }

    res.status(200).send(usersList);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

// endpoint que busque todos os usuários que tenham uma propriedade type específica, recebendo apenas um type por vez.

app.get("/users/roles", (req: Request, res: Response) => {
  let errorCode = 422;
  const typeUsers = req.body.type as string;

  try {
    if (!typeUsers) {
      // se a lista não existir...
      errorCode = 333;
      throw new Error("tipo de usuário está faltando (normal/admin)");
    }

    if (typeUsers !== "ADMIN" && typeUsers !== "NORMAL") {
      errorCode = 477;
      throw new Error("Digite um tipo válido admin/normal");
    }

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
