(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }

    interface Movie{
        cast: string[];
        description: string; 
        rating: number;
        title: string; 
    }
    
    // Crear una película
    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        //validar actor

        console.log('Crear actor');
        return true;       

    }

    function existActor(fullName: string) : boolean{
        if ( fullName === 'fernando' ) return false;
        return true;
    }

    enum Situacion{
        dead = 'dead',
        separated = 'separated',
        retired = 'retired'
    }

    const getPayAmount = (situacion: Situacion): number => {

        switch (situacion) {
            case Situacion.dead:
                return 1500;
            case Situacion.retired:
                return 3000;
            case Situacion.separated:
                return 2500;
            default:
                return 4000;
        }
    }

})();  

