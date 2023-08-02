import React from "react";

export class ClickAlert extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            left: Math.floor(Math.random() * props.buttonSize, 2),
            top: Math.floor(Math.random() * props.buttonSize, 2)
        }
        console.log('created!')
    }

    render() {

        const randomPosition = {top: this.state.top, left: this.state.left};

        return (

            <div className={"animate-slideUp opacity-0 absolute z-10 text-amber-500 h-0"} style={randomPosition}>
                +1
            </div>
        )
    }
}