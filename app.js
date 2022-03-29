const cakes = 20;
const apples = 25;
const persons = 9;

function totalBox(){
    return (cakes+apples)/persons;
}

function itemInsideBox(){
    const box = totalBox();
    let items = [];
    let person = 1;
    while(person <= box){
        items.push({
            person: 'person_' + person,
            apples: apples / box,
            cakes: cakes / box  
        })
        person++;
    }
    return items;
}

console.log(`Ainun Have ${totalBox()}`);
console.log(`Ainun Have Cakes and Apple each box is ${JSON.stringify(itemInsideBox())}`)

module.exports= {
    totalBox: totalBox(),
    itemInsideBox: itemInsideBox(),
}