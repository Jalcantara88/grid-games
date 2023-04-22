type GameStyle = {

}

type GameImage = {
    img: string,
    caption: string,
    tags: string[]
}

type GameGallery = GameImage[]

type GameData = {
    id: number,
    name: string,
    thumbnail: string,
    desctription: string,
    gallery: GameGallery,
    howTo: string,
    styles: GameStyle,
    create: {},
    update: {},
    destroy: {}
}

export type GamesData = GameData[]

export const AllGames: GamesData = [
    {
        id: 0,
        name: "Tetris",
        thumbnail: "",
        desctription: "fit the falling shapes into lines to clear the board. only fully completed horizontal lines will be cleared. once the game board is full and no more pieces have room to fall, its game over.",
        gallery: [
            {
                img: "",
                caption: "cover art",
                tags: ["cover art", "puzzle", "retro"]
            }
        ],
        howTo: "",
        styles: {},
        create: {},
        update: {},
        destroy: {},
    }
]