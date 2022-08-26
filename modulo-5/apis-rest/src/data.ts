export enum USER_ROLE {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}
export type Users = {
  id: number;
  name: string;
  email: string;
  type: USER_ROLE;
  age: number;
};

export let users: Users[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: USER_ROLE.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: USER_ROLE.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: USER_ROLE.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: USER_ROLE.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: USER_ROLE.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: USER_ROLE.ADMIN,
    age: 60,
  },
];
