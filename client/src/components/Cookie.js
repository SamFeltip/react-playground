import React from "react";

export class Cookie extends React.Component {
    constructor(props) {
        super();
        this.buttonSize = props.buttonSize;
        this.onClick = props.onClick;
    }

    render() {
        return <div
            className={"absolute top-0 left-0 w-[" + this.buttonSize + "px] h-[" + this.buttonSize + "px] " +
                "cursor-pointer flex justify-center items-center rounded-full transition-transform duration-10 " +
                "bg-amber-200 active:bg-amber-300 active:scale-75"}
            onClick={this.onClick}>
            click me!
        </div>;
    }
}