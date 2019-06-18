class Foo {
    bar() {}
}

const bar = new Foo();

console.log(Object.getPrototypeOf(bar) === Foo.prototype);

class Song {
    constructor(public title: string, public duration: number) {}
}

class Playlist {
    constructor(public name: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
    return item instanceof Song;
}

function getItemName(item: Song | Playlist) {
    if(isSong(item)) {
        return item.title;
    }
    return item.name;
}

const songName = getItemName(new Song('Schism',300000));
const playlistName = getItemName(new Playlist(
    'Metal Playlist',
    [new Song('Lateralus', 420000)]
));

console.log("song name: ",songName);
console.log("playlist name: ",playlistName);