const nameAndBirthday = (name: string, birthday: string): string => {
  const [day, month, year] = birthday.split("/");
  const frase: string = `Olá me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}`;
  return frase;
};

console.log("activity 1", nameAndBirthday("Wagner", "21/12/1994"));


