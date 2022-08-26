import Express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./DataUsers";

const banco_de_dados = users;

const app = Express();
app.use(Express.json());
app.use(cors());

// end-point para verificar todos os usuarios (somente para testes)
app.get("/accounts", (req: Request, res: Response) => {
  let errorCode = 500;

  try {
    if (!banco_de_dados[0]) {
      errorCode = 404;
      throw new Error(
        "não existe nenhuma conta cadastrada em nosso banco de dados"
      );
    }
    res.status(200).send(banco_de_dados);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

// end-point para criar conta

app.post("/account/create", (req: Request, res: Response) => {
  let errorCode = 500;

  try {
    const { name, CPF, birthDate } = req.body;

    const newAccount = {
      name,
      CPF,
      birthDate,
      balance: 0,
      statement: [{ value: "", date: "", description: "" }],
    };

    if (!newAccount) {
      errorCode = 404;
      throw new Error("preencha todos os campos");
    }

    banco_de_dados.push(newAccount);
    res.status(200).send(banco_de_dados);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const adress = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${adress.port}`);
  } else {
    console.error(`Failure upon starting server`);
  }
});
