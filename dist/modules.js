"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, family, age, role) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.role = role;
        this.name = name;
        this.family = family;
        this.age = age;
        this.role = role;
    }
    get roleGetter() {
        return this.role;
    }
    set roleSetter(newRole) {
        this.role = newRole;
    }
}
exports.Person = Person;
