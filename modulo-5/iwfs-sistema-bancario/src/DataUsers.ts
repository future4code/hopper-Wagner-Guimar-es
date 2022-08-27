export type USERS = {
  name: string;
  CPF: string;
  birthDate: any;
  balance: number;
  statement: STATEMENTS[];
};
export type STATEMENTS = {
  value: string;
  date: any;
  description: string;
};

export const users: USERS[] = [
  {
    name: "Wagner",
    CPF: "1",
    birthDate: "12-21-1994",
    balance: 80,
    statement: [{ value: "", date: "", description: "" }],
  },
];
