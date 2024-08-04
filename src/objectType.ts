// accountInfo
// charInfo

type AccounInfo = {
    id:number;
    name:string;
    email?:string;
}

type charInfo = {
    nickname: string;
    level: number
}

const accountInfo = {
    id: 123,
    name: 'Lilian',
}

const accountInfo1 = {
    id: 123,
    name: 'Lilian',
    email: 'lilielili@gmail.com'
}

const char: charInfo = {
    nickname:'lilielili',
    level:10
}

//intersection
type PlayerInfo = AccounInfo & charInfo;

const player: PlayerInfo = {
    name: 'Andre',
    nickname:'andrekelian',
    email: 'andrekelian@gmail.com',
    id: 12,
    level:5
}


// ****** Diferenças entre Type e Interface ****** //

// permite declarar tipos primitivos 
type userID = string | number

// permite declarar tuplas normalmente
type Tuple = [number,string, string]

[1, 'Lilian', 'Kelian'] as Tuple
[2, 'Cauã', 'Kelian'] as Tuple
[3, 'André', 'Kelian'] as Tuple

// Apenas uma declaração por escopo, não é possível extender o objeto. com o mesmo nome 
type Pessoa = { a: string}
type Pessoa2 = { b: string}