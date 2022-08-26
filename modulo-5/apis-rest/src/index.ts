import Express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, Users } from "./data";

let usersList = users;
const app = Express();
app.use(Express.json());
app.use(cors());

// endpoint para buscar todos os usuários
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

// Requisição para retornar todos os uuários que são admins

app.get("/users/roles", (req: Request, res: Response) => {
  let errorCode = 422;
  const userRole = req.query.userRole;

  try {
    const typeUsers = req.query.type

    const adminUsers = usersList.filter((u) => u.type === "ADMIN");
    res.status(200).send(adminUsers);

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
