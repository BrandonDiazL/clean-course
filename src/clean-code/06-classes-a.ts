
(() => {

    type Gender = 'M'|'F';

    class Person {
        // public name: string;
        // public gender:Gender;
        // public birthdate:Date;

        constructor(public name:string, public gender:Gender, public birthdate:Date){
            // this.name = name;
            // this.gender = gender;
            // this.birthdate = birthdate;
        }
    }

    class User extends Person{
        private lastAccess: Date;

        constructor(
            public email:string,
            public role: string,            
            name: string,
            gender: Gender,
            birthdate:Date
        ){
            super(name, gender,birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email:string,
            role: string,
            name: string,
            gender: Gender,
            birthdate:Date){
                super(email, role, name, gender, birthdate);

        }
    }

    

    // const newPerson = new Person('Brandon', 'M', new Date('1994-07-06'));
    // console.log(newPerson);
})();