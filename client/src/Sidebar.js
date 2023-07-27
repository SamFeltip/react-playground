import React, {useState} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

function SidebarItem({description, index}) {
    return (
        <div className='block lg:table-row hover:text-black cursor-pointer pb-10'>
            <div className='lg:pr-10 block lg:table-cell text-center'>
                <p>Chapter {index+1}</p>
            </div>
            <div className='block lg:table-cell text-center lg:text-end'>
                <p>{description}</p>
            </div>
        </div>
    )
}

function Sidebar({items}) {
    const [open, setOpen] = useState(false)
    let body = document.getElementById("body");

    const toggleOpen = () => {
        setOpen(!open)
        console.log(open)

        body.classList.toggle('dark');

    }

    const table_rows = items.map((item, index) => {
        return <SidebarItem description={item} index={index}/>
    })
    let menuIcon = open ? 'bars' : "x"
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
        </div>
    )
}

export default Sidebar;

