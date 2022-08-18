import express, { Request, Response } from "express";
import cors from "cors";
import { request } from "express";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log("Servidor está rodando na porta 3003");
});

// atividade 1

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong");
});

// atividade 2

type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// atividade 3

const todos: ToDo[] = [
  {
    userId: 1,
    id: 147,
    title: "arrumar a casa",
    completed: false,
  },
  {
    userId: 2,
    id: 258,
    title: "estudar o conteúdo da aula anterior",
    completed: false,
  },
  {
    userId: 3,
    id: 369,
    title: "Lembrar de comprar os ingressos para o cinema",
    completed: true,
  },
  {
    userId: 4,
    id: 123,
    title: "ir no mercado",
    completed: false,
  },
];

// atividade 4

app.get("/todos/completed/:isCompleted", (req: Request, res: Response) => {
  let isCompleted: any = req.params.isCompleted;

  if (isCompleted === "true") {
    isCompleted = true;
  } else if (isCompleted === "false") {
    isCompleted = false;
  }

  const tarefas = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === isCompleted) {
      tarefas.push(todos[i]);
    }
  }
  res.send(tarefas);
});

// atividade 5

app.post("/todos", (req: Request, res: Response) => {
  const userId = req.body.userId;
  const title = req.body.title;

  const novaTarefa: ToDo = {
    userId,
    id: Date.now(),
    title,
    completed: false,
  };
  todos.push(novaTarefa);
  res.send(todos);
});
