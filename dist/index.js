"use strict";
// // import { PermissionsType } from "./types";
// // enum Role {
// //   "ADMIN",
// //   "DEVELOPER",
// //   "WRITER",
// //   "SUPPORT",
// //   "MANAGER",
// // }
// // type UserType = {
// //   firstName: string;
// //   lastName: string;
// //   role: Role;
// //   age: number;
// // };
// // const user: UserType = {
// //   age: 21,
// //   firstName: "David",
// //   lastName: "Steven",
// //   role: Role["ADMIN"],
// // };
// // const getCssProperty = (
// //   param: `${number}px` | `${number}em` | `${number}rem`
// // ) => param;
// // // 12px, 12rem, 12em ✅
// // // 12dvh ⛔
// // let test: unknown = "Test Message";
// // let userName = test as string;
// // const LinkElement = document.querySelector(".link") as HTMLAnchorElement;
// // const FormElement = document.querySelector(".form") as HTMLFormElement;
// // console.log(FormElement.action);
// // console.log(LinkElement.href);
// // function sum(num1: number, num2: number, callback: (res: number) => void) {
// //   const result = num1 + num2;
// //   return callback(result);
// // }
// // sum(12, 24, (res) => {
// //   console.log(res);
// // });
// // const fireError = (message: string, status: boolean): never => {
// //   throw new Error(JSON.stringify({ message, status }));
// // };
// // fireError("Something Went wrong", true);
// // class AdminGenerator {
// //   userId: string;
// //   role: "ADMIN" | "AUTHOR" | "USER"
// //   constructor (userId: string, role: "ADMIN" | "AUTHOR" | "USER") {
// //         this.userId = userId,
// //         this.role = role
// //   }
// // }
// // const Peyman = new AdminGenerator("#geek", "ADMIN")
// // console.log(Peyman)
// // class UserData {
// //   id: string;
// //   age: number;
// //   firstName: string;
// //   lastName: string;
// //   constructor(id: string, age: number, firstName: string, lastName: string) {
// //     this.id = id;
// //     this.age = age;
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //   }
// // }
// // const users: UserData[] = [];
// // const user: UserData = {
// //   age: 20,
// //   firstName: "Peyman",
// //   lastName: "Ahmadi",
// //   id: "unique-id-91248759-492814219-40duuuud-43294850",
// // };
// // users.push(user);
// // console.log(users)
// type Roles = "ADMIN" | "AUTHOR" | "USER";
// class Person {
//   firstName: string;
//   lastName: string;
//   age: number;
//   private role: Roles;
//   constructor(firstName: string, lastName: string, age: number, role: Roles) {
//     (this.firstName = firstName),
//       (this.lastName = lastName),
//       (this.age = age),
//       (this.role = role);
//   }
//   get getRole() {
//     return this.role;
//   }
//   set setRole(role: Roles) {
//     this.role = role;
//   }
// }
// const Peyman = new Person("Peyman", "Ahmadi", 20, "ADMIN");
// console.log(Peyman.getRole) // Before get updated -- 
// Peyman.setRole = "USER"
// console.log(Peyman)
// // class Admin extends Person {
// //   role: Roles;
// //   private permissions: PermissionsType[];
// //   constructor(
// //     firstName: string,
// //     lastName: string,
// //     age: number,
// //     role: Roles,
// //     permissions: PermissionsType[]
// //   ) {
// //     super(firstName, lastName, age);
// //     this.role = role;
// //     this.permissions = permissions;
// //   }
// // }
// // const PromotePeyman = new Admin("Peyman", "Ahmadi", 20, "ADMIN", ["MANAGE_ARTICLES"]);
