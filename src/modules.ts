import { RoleType } from "./types";

export class Person {
    constructor(public name: string, public family: string, public age: number, protected role: RoleType) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.role = role;
    }

    get roleGetter () {
        return this.role;
    }

    set roleSetter (newRole: RoleType) {
        this.role = newRole
    }
}
