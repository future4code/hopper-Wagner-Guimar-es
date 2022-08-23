import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//1

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express");
});

//2

type User = {
  id: string;
  name: string;
  phone: number;
  email: string;
  website: string;
};

//3

const users: User[] = [
  {
    id: "asdasd-asdasd-sadasd-asdasd",
    name: "Wagner",
    phone: 22 - 999887744,
    email: "wagner@wagner.com",
    website: "www.wagner.com.br",
  },
  {
    id: "25344253-324234-23423423-2342342",
    name: "João",
    phone: 21 - 9998777444,
    email: "joao@joao.com",
    website: "www.joao.com.br",
  },
  {
    id: "r34r34r-r43r43r-43r34r",
    name: "Pedro",
    phone: 34 - 999877444,
    email: "pedro@pedro.com",
    website: "www.pedro.com.br",
  },
];

//4

app.get("/users", (req: Request, res: Response) => {
  if (!users.length) {
    res.status(400).send("Não há usuários cadastrados");
  }

  res.status(200).send(users);
});

//5

type Post = {
  id: string;
  title: string;
  body: string;
  userId: string;
};

//6

const posts: Post[] = [
  {
    id: "333-444-555",
    title: "Site do Wagner",
    body: "Body do site do Wagner!",
    userId: "asdasd-asdasd-sadasd-asdasd",
  },

  {
    id: "777-888-999",
    title: "Site do joão",
    body: "Texto Aleatório aqui",
    userId: "25344253-324234-23423423-2342342",
  },

  {
    id: "222-333-444",
    title: "Site do Pedro",
    body: "Outro Texto Aleatório",
    userId: "r34r34r-r43r43r-43r34r",
  },
];

//7

app.get("/posts", (req: Request, res: Response) => {
  if (!posts.length) {
    res.status(400).send("Não tem posts.");
  }

  res.status(200).send(posts);
});

// Exercício 8
// Não consegui fazer
