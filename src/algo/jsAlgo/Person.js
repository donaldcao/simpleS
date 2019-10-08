export class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

}

let donald = new Person('donald');
console.log(donald._name);
donald.name = 'Donald Cao';
console.log(donald);
console.log(3 ** 2);

// Set, Map, WeakSet, WeakMap, 

