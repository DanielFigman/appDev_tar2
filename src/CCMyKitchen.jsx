import { cloneElement } from "react";
import { Component } from "react";
import CCRecipeDone from "./CCRecipsDone";
import CCRecipesList from "./CCRecipsList";

const food = [
    {
        id: 1,
        img: 'https://www.foodik.co.il/Images/Site/Products/1105.jpg',
        name: 'Pasta',
        details: 'Cooking tomato sauce and at the same time boiling water for pasta separately for about 20 minutes'
    },
    {
        id: 2,
        img: 'https://s3-eu-west-1.amazonaws.com/images-marleyspoon-production/media/recipes/56744/main_photos/large/creamy_ravioli-abef0a859fa4c3980af230ec317b933d.jpeg',
        name: 'Ravioli',
        details: 'Boil water and put the ravioli inside and at the same time prepare a cream sauce with herbs for 30 minute'
    },
    {
        id: 3,
        img: 'https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
        name: 'Pizza',
        details: 'Flatten the dough and place the tomato sauce, then sprinkle the yellow cheese and toppings as you wish and put in the oven.'
    }
]

const food2= [
    {
        id: 1,
        img: 'https://www.foodik.co.il/Images/Site/Products/1105.jpg',
        name: 'Pasta',
        details: 'Cooking tomato sauce and at the same time boiling water for pasta separately for about 20 minutes'
    },
    {
        id: 2,
        img: 'https://s3-eu-west-1.amazonaws.com/images-marleyspoon-production/media/recipes/56744/main_photos/large/creamy_ravioli-abef0a859fa4c3980af230ec317b933d.jpeg',
        name: 'Ravioli',
        details: 'Boil water and put the ravioli inside and at the same time prepare a cream sauce with herbs for 30 minute'
    }
]

let receipesToPrepeare = [];
let recipesToEat = [];


export default class CCMyKitchen extends Component {
    constructor(props) {
        super(props);

        this.State = {
            recipesPre: receipesToPrepeare,
            recipesEat: recipesToEat
        };
    }

    getData = (data) => {

        if (data["REMOVE"]) { // if true remove the dish from the receipes to make and add to recipesToEat
            receipesToPrepeare.push(food.filter(x=> x.id != data.ID))
            recipesToEat.push(food.filter(x=> x.id == data.ID))
            let x = data["childState"]
            x({resptoPrep:receipesToPrepeare, respToEat:recipesToEat})
            console.log(receipesToPrepeare,recipesToEat )
        }
        else {
            receipesToPrepeare.push(recipesToEat.filter(x=> x.id == data.ID))
            recipesToEat.filter(x=> x.id != data.ID);
            console.log(receipesToPrepeare,recipesToEat )
        }
    }


    render() {
        return (
            <div>
                <div className="row">
                    <CCRecipesList recipesPre={food} recipesEat={recipesToEat} sendData={this.getData} />
                </div>
            </div>
        );
    }
}