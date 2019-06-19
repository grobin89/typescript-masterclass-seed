interface IArtist {
    name: string;
}

class ArtistCreator implements IArtist {
    constructor(public name: string) {}
}

function artistFactory({ name }: IArtist) {
    return new ArtistCreator(name);
}

artistFactory({name: 'Greg'});