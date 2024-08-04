"use strict";
const tlou = {
    title: 'The Last Of Us',
    description: "The best game in the world",
    genre: 'action',
    platform: ['PS3', 'PS5', 'PS5'],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    },
};
//tlou.genre = 'new' - NÃO CONSEGU PQ ELE ESTÁ READ ONLY
console.log(tlou.genre);
if (tlou.getSimilars) { //como eu coloquei a funcionalidade como opicional, preciso verificar se ela existe no componente antes de utilizar pq senão o TS não compila
    tlou.getSimilars(tlou.title);
}
const leftBehind = {
    title: "The Last Of Us - Left Behind",
    description: 'You play the game as Ellie before the original game',
    genre: 'action',
    platform: ['PS4', 'PS5'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters']
};
class CreateGame {
    constructor(title, description, genre, platform) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.platform = platform;
    }
}
const got = {
    title: 'Game Of Thrones',
    description: "The best war game in the world",
    genre: 'action',
    platform: ['PS3', 'PS5', 'PS5'],
};
[1, 'Lilian', 'Kelian', 38, 'Mais legal'];
[2, 'Caua', 'Kelian', 20, 'Mais velho'];
[3, 'Andre', 'Kelian', 18, 'Mais emotivo'];
const $ = {
    name: 'Lilian',
    fullName: 'Kelian'
};
// preferir usar interfaces quando estiver criando objetos e classes (POO)
