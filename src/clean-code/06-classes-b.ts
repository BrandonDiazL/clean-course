(() => {

    // No aplicando el principio de responsabilidad única

    interface PersonProps{
        name: string;
        gender: Gender; 
        birthdate: Date;
    }

    type Gender = 'M'|'F';

    class Person {

        public name: string;
        public gender: Gender; 
        public birthdate: Date;

        constructor({name,gender,birthdate}: PersonProps){
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProps{
        email: string;
        role: string;
        name: string;
        gender: Gender; 
        birthdate: Date;
    }

    class User extends Person {
        
        private lastAccess: Date;
        public email: string;
        public role: string;

        constructor({email,role,name,gender,birthdate }: UserProps) {
            super( {name, gender, birthdate} );
            this.email = email,
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps{
        workingDirectory: string,
        lastOpenFolder  : string,
        email           : string,
        role            : string,
        name            : string,
        gender          : Gender,
        birthdate       : Date
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor(
            {workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate}: UserSettingsProps
        ) {
            super({email, role, name, gender, birthdate} );
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder
        }
    }


    const userSettings = new UserSettings(
        {
            birthdate: new Date('1985-10-21'),
            email: 'brandon@google.com',
            gender: 'M',
            lastOpenFolder: '/home',
            name:'Brandon',
            role:'Admin',
            workingDirectory: '/usr/home',
        }
    );

    console.log({ userSettings });


})();