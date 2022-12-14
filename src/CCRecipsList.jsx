import { Component } from "react";
import CCRecipe from "./CCRecipe";



export default class CCRecipesList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            recipes: props.recipesPre,
            counter: props.recipesPre.length,

            recipesEat: [],
            counter1: props.recipesEat.length

        };

        this.setStateFunc = (data) => {
            this.setState({ recipes: data.resptoPrep[0], recipesEat: data.respToEat[0]})
        }
    }



    getData = (data) => {
        let x = data.btnName == "Eat!" ? false : true;
        this.props.sendData({ REMOVE: x, ID: data.id, childState: this.setStateFunc })
    }



    render() {


        let recipesStr = this.state.recipes.map(recip =>
            <CCRecipe
                id={recip.id}
                img={recip.img}
                name={recip.name}
                details={recip.details}
                btnName='Prepare dish!'
                sendData={this.getData}/>);

        let recipesStr2 = this.state.recipesEat.map(recip =>
            <CCRecipe
                id={recip.id}
                img={recip.img}
                name={recip.name}
                details={recip.details}
                btnName="Eat!"
                sendData={this.getData}/>);

        return (
            <div>
                <div className="row">
                    {recipesStr}
                </div>
                <div className="row">
                    {recipesStr2}
                </div>
            </div>
        );

    }
}