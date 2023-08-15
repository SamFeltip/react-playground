import React from "react";
import {ClickAlert} from "../components/ClickAlert";
import {Cookie} from "../components/Cookie";
import {Automata} from "../components/Automata";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class CookieClicker extends React.Component {

    constructor(props) {
        super(props);
        this.buttonSize = 200;
        this.clickAlerts = [];


        this.automataTypes = {
            'robot': {
                icon: icon({name: 'robot'}),
                cost: 20
            },

            'person': {
                icon: icon({name: 'user'}),
                cost: 20
            }
        }
    }

    state = {
        cookiesEarned: 0,
        automataCount: {
            robot: 0,
            person: 0
        }
    }

    cookieGained = () => {

        this.setState({cookiesEarned: this.state.cookiesEarned + 1, automata: this.state.automataCount});
        this.clickAlerts.push(
            <ClickAlert key={"clickedAlert" + this.state.cookiesEarned} buttonSize={this.buttonSize}/>
        )

    }

    purchaseAutomata = (e) => {
        let automata_name = e.currentTarget.getAttribute("data-automata-name")
        console.log(`automata ${automata_name}`)

        let new_automata = this.state.automataCount
        new_automata[automata_name] = this.state.automataCount[automata_name] + 1

        this.setState(
            {
                cookiesEarned: this.state.cookiesEarned,
                automataCount: new_automata
            }
        )

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
                    {
                        Object.entries(this.automataTypes).map(([key, automataStructure]) => (
                            <div key={"automataWrapper" + key} className={"flex flex-row justify-between items-center mb-5"}>

                                <Automata
                                    onClick={this.purchaseAutomata}
                                    dataAutomataName={key}
                                    icon={automataStructure.icon}
                                    cost={automataStructure.cost}
                                />

                                <div>
                                    <FontAwesomeIcon icon={automataStructure.icon} size="xl"/>
                                    <span className="ps-2">{`x${this.state.automataCount[key]}`}</span>
                                </div>

                            </div>)
                        )
                    }
                </div>
            </div>

        )

    }
}

export default CookieClicker