export class User {
    constructor (
        name?: string,
        email?: string,
        message?: string,
        age?: number,
        friends?: User[]
        ) {
            this.name = name
            this.email = email
            this.message = message;
            this.age = age;
            this.friends = friends
        }
        name: string;
        email: string;
        message: string;
        age: number;
        friends: User[];

    getName():string {
        return this.name;
    }

    getEmail():string {
        return this.email;
    }

    getMessage():string {
        return this.message;
    }

    getAge():number {
        return this.age;
    }

    getFriends() {
        return this.friends;
    }

}
