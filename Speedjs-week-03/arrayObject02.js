let  chaiTypes =["Masala Chai","Ginger chai","Green chai","Lemon chai"];


// console.log(chaiTypes);
// console.log(`Total chai Types: ${chaiTypes.length}`);

chaiTypes.push("Black chai");



let index = chaiTypes.indexOf("Green Tea");
// console.log(index);

let chaiRecipe = {
    name:"Masala chai",
    ingradients:{
        water: "1 cup",
        milk: "1 cup",
        sugar: "1 spoon",
        teaPowder: "1 spoon",
        ginger: "1 spoon",
        cardamom: "1 spoon"
    },
    instructions: "Boil water, add tea powder, ginger, cardamom, sugar, milk and boil for 5 minutes"
    }
    // console.log(chaiRecipe.ingradients.spices[1]);


    let updatedChaiRecipe = {
        ...chaiRecipe,
        instruction:"Boil water,add tea leaves, milk , suger,spices with some love",
    };
    // console.log(updatedChaiRecipe);

    let {name,ingredients} = chaiRecipe
    let {firstChai,secondChai}=chaiTypes

    console.log(ingredients);
    console.log(secondChai);