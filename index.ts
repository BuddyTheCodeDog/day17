//1
function printArrayOfStrings(arrayOfStrings: string[]){
    arrayOfStrings.forEach((element) => 
    console.log(element));
}
const arrayOfStrings: string[] = ["ok", "next","assignment"];
printArrayOfStrings(arrayOfStrings);

//2
function addsThreeNumbers(x: number, y: number, z: number): number {
    const n: number = x+y+z;
    return n;
}
console.log(addsThreeNumbers(1,2,3), "is my added numbers");

//3
function takesStringAddsPromise(takenString: string): Promise<string> {
    return new Promise((resolve) => 
    resolve(`hello ${takenString}`));
}
const sillyName: string = "faucet";
takesStringAddsPromise(sillyName).then(response => console.log(response));

//4
function acceptsArrayWithDiffElementTypes(diffElementTypeArray: (string | number | boolean)[]): void{

    diffElementTypeArray.forEach((element: string | number | boolean) => {
        if (typeof element === 'string'){
            console.log(`${element} is a string`);
        }
        else if (typeof element === 'number'){
            console.log(`${element} is a number`);
        }
        else if (typeof element === 'boolean'){
            console.log(`${element} is a boolean`);
        }
    })
        
}

const arraySillyStrings: string[] = ['cat','dog','hamburger','buddy'];
const arraySillyNumbers: number[] = [69,420,1337];
const arraySillyBooleans: boolean[] = [false,true,false,true];
const arrayNotReadingTheAssignment: (string | number | boolean)[] = ['figure','it', true, 69420];
const arrayTryingToBreakItself: {} = {blah:'does', fourtytwo: 42, isTrue: true};

acceptsArrayWithDiffElementTypes(arrayOfStrings);
acceptsArrayWithDiffElementTypes(arraySillyNumbers);
acceptsArrayWithDiffElementTypes(arraySillyBooleans);
// acceptsArrayWithDiffElementTypes(arrayTryingToBreakItself); THIS HAD RED SQUIGGLES


//5
type discordUser = {
    name: string;
    isAdmin: boolean;
    isGMI: boolean;
    roles: string[];
}

type discordMessage = {
    user: discordUser;
    text: string;
    keks: number;
}

//6
function addKekToMessage(discordMessage: discordMessage){
    discordMessage.keks += 1;
}

function canDeleteServer(discordUser: discordUser): boolean{
    if(discordUser.isAdmin){
        return true;
    }
    else{
        return false;
    }
}

function editMessage(discordMessage:discordMessage,discordUser:discordUser,newText:string){
    if(discordMessage.user.name === discordUser.name){
        discordMessage.text = newText;
    }
    else{
        console.log('you cant edit this message');
    }
}

const buddyUser:discordUser ={
    name: 'buddy',
    isAdmin: true,
    isGMI: true,
    roles: ['Team','restarded']

}

const myMessage: discordMessage = {
    user: buddyUser,
    text: 'Hello @everyone',
    keks: 999
}

addKekToMessage(myMessage);
console.log(myMessage.keks);

console.log(canDeleteServer(buddyUser));

console.log(myMessage);
editMessage(myMessage,buddyUser,'everytime, it gets worse');
console.log(myMessage);



//7
type NFT = {
    imgURL: string;
    name: string; 
    currentOwnderAddress: string;
    openSeaFloorPrice: number;
    description: string;

}

const pandaNFT: NFT = {
    imgURL: 'urlgoeshere',
    name: 'panda 2040',
    currentOwnderAddress: 'checkprice.sol',
    openSeaFloorPrice: 0.04,
    description: 'its a panda'

}

const panda2NFT: NFT = {
    imgURL: 'urlgoeshere',
    name: 'ruggyboi',
    currentOwnderAddress: 'checkprice.sol',
    openSeaFloorPrice: 0.9,
    description: 'its a panda'

}
const panda3NFT: NFT = {
    imgURL: 'urlgoeshere',
    name: 'gmi',
    currentOwnderAddress: 'checkprice.sol',
    openSeaFloorPrice: 0.1,
    description: 'its a panda'

}

const arrayOfNFTS: NFT[] = [pandaNFT,panda2NFT,panda3NFT];

function getCheapestNFT(arrayOfNFTS: NFT[]){
    arrayOfNFTS.sort((a, b) => a.openSeaFloorPrice - b.openSeaFloorPrice);
    return arrayOfNFTS[0];
}

console.log(getCheapestNFT(arrayOfNFTS));