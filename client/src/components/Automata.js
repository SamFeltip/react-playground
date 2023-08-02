import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import * as PropTypes from "prop-types";


export class Automata extends React.Component {
    constructor(props) {
        super(props);
        this.automataGainedFromParent = props.automataGainedFromParent;
        this.automataName = props.automataName;
        this.icon = props.icon;
        this.cost = props.cost;
        this.automataTypeCount = props.automataTypeCount;
    }

    render() {
        return <div className={"flex flex-row justify-between items-center mb-5"}>

            <div className=" text-left">
                <div className={'group relative'}>
                    <button
                        onClick={this.automataGainedFromParent}
                        data-automata-name={this.automataName}
                        className={"flex items-center active:scale-75 bg-black text-white py-2 px-5 rounded-xl h-[50px]"}
                    >
                        <FontAwesomeIcon icon={this.icon} className={"p-2"}/>
                        <FontAwesomeIcon icon={icon({name: "plus"})} className={"p-2"}/>
                    </button>

                    <span className={"pointer-events-none absolute -top-14 w-max left-0 opacity-0 transition-opacity " +
                        " md:group-hover:opacity-100 p-2 bg-black text-white rounded-xl"}
                    >
                        {`buy a ${this.automataName}`}
                    </span>
                </div>

                <p><em>{this.cost} cookies</em></p>
            </div>

            <div>
                <FontAwesomeIcon icon={this.icon} size="xl"/>
                <span className="ps-2">{`x${this.automataTypeCount}`}</span>
            </div>
        </div>;
    }
}