import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";


export function Automata(props) {
    return (
        <div className="text-left">
            <div className={"group relative"}>
                <button
                    onClick={props.onClick}
                    data-automata-name={props.dataAutomataName}
                    className={"flex items-center active:scale-75 bg-black text-white py-2 px-5 rounded-xl h-[50px]"}
                >
                    <FontAwesomeIcon icon={props.icon} className={"p-2"}/>
                    <FontAwesomeIcon icon={icon({name: "plus"})} className={"p-2"}/>
                </button>

                <span className={"pointer-events-none absolute -top-14 w-max left-0 opacity-0 transition-opacity " +
                    " md:group-hover:opacity-100 p-2 bg-black text-white rounded-xl"}
                >
                    {`buy a ${props.dataAutomataName}`}
                </span>
            </div>

            <p><em>{props.cost} cookies</em></p>
        </div>);
}
