import React, {useState} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

function SidebarItem({index, description}) {
    return (
        <div className='block lg:table-row hover:text-black cursor-pointer pb-10'>
            <div className='lg:pr-10 block lg:table-cell text-center'>
                <p>
                    <a href={description}>
                        Chapter {index+1}
                    </a>
                </p>
            </div>
            <div className='block lg:table-cell text-center lg:text-end'>
                <a href={description}>
                    <p>{description}</p>
                </a>
            </div>
        </div>
    )
}

function Sidebar({items}) {
    const [open, setOpen] = useState(false)
    let body = document.getElementById("body");

    const toggleOpen = () => {
        setOpen(!open)
        body.classList.toggle('bg-[#acd0e3]');
    }

    const table_rows = items.map((item, index) => {
        return <SidebarItem key={"sidebarItem" + index} index={index} description={item} />
    })

    return (
        <div className={"fixed right-0 bg-[#0097ee] text-white font-nunito h-screen lg:w-[450px] linear-in duration-200 " + (open ? "w-[80%]" : "w-[80px]")}>

            <button className={"absolute right-[30px] top-[30px] lg:hidden font-[900]"} onClick={toggleOpen}>
                <FontAwesomeIcon icon={open ? icon({name: "x" }) : icon({name: "bars" }) } size= "xl" />
            </button>

            <div className={"pt-[20vh] mx-5 " + (open ? "block" : "hidden lg:block")}>

                <h1 className="text-[40px] lg:text-[50px] text-white text-center">
                    Sections
                </h1>


                <div className="text-[28px] flex flex-row justify-center items-center gap-[35px] box-border">
                    <div>
                        {table_rows}
                    </div>

                </div>
            </div>
            <div>
                <a href="/" className={"absolute right-[30px] bottom-[30px] font-[900]"}>
                    <FontAwesomeIcon icon={icon({name: "home" }) } size= "xl" />
                </a>
            </div>
        </div>
    )
}

export default Sidebar;

