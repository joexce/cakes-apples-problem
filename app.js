const cakes = 20;
const apples = 25;
const items = 9;

function totalBox(){
    return (cakes+apples)/items;
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

console.log(`Ainun Have ${totalBox()} Boxes`);
console.log(`Ainun Have Cakes and Apple each box is ${JSON.stringify(itemInsideBox())}`)

module.exports= {
    totalBox: totalBox(),
    itemInsideBox: itemInsideBox(),
}