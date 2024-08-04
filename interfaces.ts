interface Game { //geralmente utilizamos a interface para objetos mais complexos
 title:string;
 description:string;
 readonly genre: string;
 platform:string[];
 isForMe?:boolean; // COM O ? ESTOU DIZENDO QUE ESSE PARÂMETRO É OPICIONAL NO MOMENTO QUE FOR ESTANCIAR O OBJETO
 getSimilars?:(title:string) => void;
}

const tlou: Game = {
    title:'The Last Of Us',
    description: "The best game in the world",
    genre: 'action',
    platform: ['PS3', 'PS5', 'PS5'],
    getSimilars: (title:string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    },
}

//tlou.genre = 'new' - NÃO CONSEGU PQ ELE ESTÁ READ ONLY

console.log(tlou.genre);
if (tlou.getSimilars){ //como eu coloquei a funcionalidade como opicional, preciso verificar se ela existe no componente antes de utilizar pq senão o TS não compila
    tlou.getSimilars(tlou.title);
}

interface DLC extends Game {
    originalGame: Game;
    newContent:string[];
}

const leftBehind: DLC = {
    title: "The Last Of Us - Left Behind",
    description: 'You play the game as Ellie before the original game',
    genre: 'action',
    platform: ['PS4','PS5'],
    originalGame: tlou,
    newContent:['3 hours story','new characters']
}

class CreateGame implements Game { //
    constructor (
        public title:string,
        public description:string,
        public genre: string,
        public platform:string[]
    ){}
}

const got: CreateGame = {
    title:'Game Of Thrones',
    description: "The best war game in the world",
    genre: 'action',
    platform: ['PS3', 'PS5', 'PS5'],
}


// ****** Diferenças entre Type e Interface ****** //

// NÃO permite declarar tipos primitivos 
// interface UserGameID extends number {}

//Isso não é uma TUPLE ele cria uma outra coisa, pois eu posso colocar outros tipos de parametros no objetos criado além dos que foram definidosna interface e não dá erro de compilação
interface Gamer {
    0: number,
    1: string   
}

[1,'Lilian','Kelian',38,'Mais legal'] as Gamer
[2,'Caua','Kelian',20, 'Mais velho'] as Gamer
[3,'Andre','Kelian',18, 'Mais emotivo'] as Gamer

// Pode ter multíplas declarações e ele une de mesmo nome 
// vantagem: quando tiver criando libs (biblioteca), prefira Interface, porque são mais extensíveis
interface Person { name: string}

interface Person { fullName: string}

const $:Person ={
    name:'Lilian',
    fullName:'Kelian'
}

// preferir usar interfaces quando estiver criando objetos e classes (POO)



