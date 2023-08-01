import React from "react";
import {ClickAlert} from "../components/ClickAlert";
import {Cookie} from "../components/Cookie";

class States extends React.Component {

    state = {
        cookiesEarned: 0,
        clickAlertCount: 0
    }


    clicked = () => {

        this.setState({cookiesEarned: this.state.cookiesEarned + 1, clickAlertCount: this.state.clickAlertCount + 1});
        this.clickAlerts.push(<ClickAlert key={"clickedAlert" + this.state.clickAlertCount} buttonSize={this.button_size}/>)

    }

    constructor() {
        super();
        this.button_size = 200;
        this.clickAlerts = [];

    }

    render() {
        const cookies_earned = this.state.cookiesEarned;

        return (
            <div
                className={"break-words text-center md:text-left font-inter text-[#020b10ff] px-[50px] pt-[10vh] " +
                    "me-[70px] text-[24px] 2xl:ps-[250px] lg:pt-[20vh] lg:me-[450px]"}>
                <h1 className="text-[40px] lg:text-[50px] text-[#020b10ff] font-[600]">
                    States
                </h1>
                <p className={'mb-5'}>
                    Cookie Clicker with React States
                </p>

                <h1 className={'text-center text-[40px] mb-2'}>{cookies_earned}</h1>

                <div className={"relative m-auto flex justify-center items-center p-5 rounded-full w-[200px] h-[200px]"}>

                    <div className={"absolute top-0 left-0 w-full h-full"}>
                        {this.clickAlerts.slice(-4)}
                    </div>

                    <Cookie buttonSize={this.button_size} onClick={this.clicked}/>
                </div>


            </div>

        )

    }
}

export default States