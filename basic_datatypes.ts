enum roles {
  MASTER,
  DEV,
  TEST,
}
const person: { name: string; age: number; hobbies: string[]; role: roles } = {
  name: "Prem Kumar",
  age: 30,
  hobbies: ["Cricket", "chess"],
  role: roles.DEV,
};

for (const hobby of person.hobbies) {
    console.log(hobby);

}
