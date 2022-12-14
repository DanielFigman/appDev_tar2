import { Component } from "react";
import CCRecipe from "./CCRecipe";



export default class CCRecipesList extends Component {
    constructor(props) {
        super(props);
        this.btnName = 'Eat!'


        this.state = {
            recipes: props.recipesEat,
            counter: props.recipesEat.length
        };

        this.setStateFunc = (data) => {
            this.setState({recipes: data})
        }
    }

    getData = (data) => {
        this.props.sendData({ REMOVE: false, ID: data, childState: this.setStateFunc})
    }

    render() {
        let recipesStr = this.state.recipes.map(recip =>
            <CCRecipe
                id={recip.id}
                img={recip.img}
                name={recip.name}
                details={recip.details}
                btnName={this.btnName}
                sendData={this.getData} />)

        return (
            <div className="row">

                {recipesStr}
            </div>
        );
    }
}