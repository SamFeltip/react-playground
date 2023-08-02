import React from "react";
import {ClickAlert} from "../components/ClickAlert";
import {Cookie} from "../components/Cookie";
import {Automata} from "../components/Automata";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

class States extends React.Component {

    state = {
        cookiesEarned: 0,
        automata: {
            robot: 0,
            user: 0
        }
    }


    cookieGained = () => {

        this.setState({cookiesEarned: this.state.cookiesEarned + 1, automata: this.state.automata});
        this.clickAlerts.push(<ClickAlert key={"clickedAlert" + this.state.cookiesEarned} buttonSize={this.buttonSize}/>)

    }

    automataGained = (e) => {
        let automata_name = e.currentTarget.getAttribute("data-automata-name")
        console.log(`automata ${automata_name}`)

        let new_automata = this.state.automata
        new_automata[automata_name] = this.state.automata[automata_name] + 1

        this.setState(
            {
                cookiesEarned: this.state.cookiesEarned,
                automata: new_automata
            }
        )

    }

    constructor(props) {
        super(props);
        this.buttonSize = 200;
        this.clickAlerts = [];

    }

    render() {
        const cookies_earned = this.state.cookiesEarned;

        return (
            <div
                className={"break-words text-center md:text-left font-inter text-[#020b10ff] px-[50px] pt-[10vh] " +
                    "me-[70px] text-[24px] 2xl:ps-[250px] lg:pt-[20vh] lg:me-[450px]"}
            >

                <h1 className="text-[40px] lg:text-[50px] text-[#020b10ff] font-[600]">
                    States
                </h1>
                <p className={'mb-5'}>
                    Cookie Clicker with React States
                </p>

                <h1 className={'text-center text-[40px] mb-2'}>{cookies_earned}</h1>

                <div
                    className={"relative m-auto flex justify-center items-center p-5 rounded-full w-[200px] h-[200px]"}>

                    <div className={"absolute top-0 left-0 w-full h-full"}>
                        {this.clickAlerts.slice(-4)}
                    </div>

                    <Cookie buttonSize={this.buttonSize} cookieGainFromParent={this.cookieGained}/>
                </div>

                <div>
                    {/*
                    TODO: replace math random so the state of States is inherited by Automata
                    */}
                    <Automata
                        key={`AutomataRobot${Math.random()}`}
                        automataName={'robot'}
                        cost={20}
                        icon={icon({name: 'robot'})}
                        automataTypeCount={this.state.automata["robot"]}
                        automataGainedFromParent={this.automataGained}
                    />
                    <Automata
                        key={`AutomataUser${Math.random()}`}
                        automataName={'user'}
                        cost={50}
                        icon={icon({name: 'user'})}
                        automataTypeCount={this.state.automata["user"]}
                        automataGainedFromParent={this.automataGained}
                    />
                </div>

            </div>

        )

    }
}

export default States