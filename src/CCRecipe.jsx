import { Component } from "react";

let readyToEat =[];

export default class CCRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            img: this.props.img,
            name: this.props.name,
            details: this.props.details,
            btnName: this.props.btnName
        }
    }

    btnChange = () => {
        this.props.sendData({ID:this.props.id, NAME:this.props.btnName})
    }

    render() {

        return (
            <div className="rec col-sm-4">
                <img src={this.state.img} alt={"image"} />
                <br />
                {this.state.name}
                <br />
                {this.state.details}
                <button onClick={this.btnChange}>
                    {this.state.btnName}
                </button>
            </div>
        );
    }
}

