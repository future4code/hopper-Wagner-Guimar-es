type USERS = {
  name: string;
  CPF: string;
  birthDate: string;
  balance: number;
  statement: STATEMENTS[];
};
type STATEMENTS = {
  value: string;
  date: string;
  description: string;
};

export const users: USERS[] = [
  {
    name: "Wagner",
    CPF: "14445497746",
    birthDate: "21/12/1994",
    balance: 0,
    statement: [{ value: "", date: "", description: "" }],
  },
];
