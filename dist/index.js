"use strict";
// enum Role {
//   "ADMIN",
//   "DEVELOPER",
//   "WRITER",
//   "SUPPORT",
//   "MANAGER",
// }
// type UserType = {
//   firstName: string;
//   lastName: string;
//   role: Role;
//   age: number;
// };
// const user: UserType = {
//   age: 21,
//   firstName: "David",
//   lastName: "Steven",
//   role: Role["ADMIN"],
// };
// const getCssProperty = (
//   param: `${number}px` | `${number}em` | `${number}rem`
// ) => param;
// // 12px, 12rem, 12em ✅
// // 12dvh ⛔
// let test: unknown = "Test Message";
// let userName = test as string;
// const LinkElement = document.querySelector(".link") as HTMLAnchorElement;
// const FormElement = document.querySelector(".form") as HTMLFormElement;
// console.log(FormElement.action);
// console.log(LinkElement.href);
// function sum(num1: number, num2: number, callback: (res: number) => void) {
//   const result = num1 + num2;
//   return callback(result);
// }
// sum(12, 24, (res) => {
//   console.log(res);
// });
// const fireError = (message: string, status: boolean): never => {
//   throw new Error(JSON.stringify({ message, status }));
// };
// fireError("Something Went wrong", true);
// class AdminGenerator {
//   userId: string;
//   role: "ADMIN" | "AUTHOR" | "USER"
//   constructor (userId: string, role: "ADMIN" | "AUTHOR" | "USER") {
//         this.userId = userId,
//         this.role = role
//   }
// }
// const Peyman = new AdminGenerator("#geek", "ADMIN")
// console.log(Peyman)
class UserData {
    constructor(id, age, firstName, lastName) {
        this.id = id;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const users = [];
const user = {
    age: 20,
    firstName: "Peyman",
    lastName: "Ahmadi",
    id: "unique-id-91248759-492814219-40duuuud-43294850",
};
users.push(user);
console.log(users);
