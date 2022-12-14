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
            let x = data.resptoPrep
            let y = data.respToEat
            this.setState({ recipes: x, recipesEat: y, counter: x.length, counter1: y.length })
        }
    }



    getData = (data) => {
        let x = data.NAME == "Eat!" ? false : true;
        this.props.sendData({ REMOVE: x, ID: data.ID, childState: this.setStateFunc })
    }



    render() {

        console.log(this.state.recipes, this.state.recipesEat)

        let recipesStr = this.state.recipes.map((recip, index) =>
            <CCRecipe
                id={recip.id}
                img={recip.img}
                name={recip.name}
                details={recip.details}
                btnName='Prepare dish!'
                sendData={this.getData} />);

        let recipesStr2 = this.state.recipesEat.map((recip, index) =>
            <CCRecipe
                id={recip.id}
                img={recip.img}
                name={recip.name}
                details={recip.details}
                btnName="Eat!"
                sendData={this.getData} />);


        let strToPrep = this.state.counter > 0 ? "Dishes to prepare" : "";
        let strToEat = this.state.counter1 > 0 ? "Dishes to Eat" : "";


        return (
            <div>
                <div className="row">
                    <div>{strToPrep}</div>
                    {recipesStr}

                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="row">
                    <div>{strToEat}</div>
                    {recipesStr2}
                </div>
            </div>
        );

    }
}