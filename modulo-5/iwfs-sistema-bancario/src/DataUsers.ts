export type USERS = {
  name: string;
  CPF: string;
  birthDate: any;
  balance: number;
  statement: STATEMENTS[];
};
export type STATEMENTS = {
  value: string;
  date: string;
  description: string;
};

export const users: USERS[] = [
  {
    name: "Wagner",
    CPF: "14445497746",
    birthDate: "12-21-1994",
    balance: 0,
    statement: [{ value: "", date: "", description: "" }],
  },
];
