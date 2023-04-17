export async function GetPerson() {
  const person: any = await new Promise((res) => {
    setTimeout(() => res({ name: "Me" }), 1000);
  });

  return <div>{person.name}</div>;
}
