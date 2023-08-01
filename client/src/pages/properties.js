import React from "react";

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

const isEven = num => {
    return num % 2 === 0
}

function Block({block_id}){

    const RED = "bg-[#d00]"
    const BLUE = "bg-[#44f]";

    // odd non primes are green
    var background_colour = "bg-[#0c6]";
    if ( isEven(block_id) ){ background_colour = RED; }
    if ( isPrime(block_id) ){ background_colour = BLUE; }

    return (
        <div className={"flex justify-center items-center h-[100px] text-white text-[20px] md:text-[30px] font-[600] " + background_colour}>
            {block_id}
        </div>
    )
}

function Properties() {

    let blocks = []

    for (let i=1 ; i<=200 ; i++) {

        blocks.push(<Block key={"Block" + i} block_id={i}/>)
    }

    return (
        <div className="break-words font-inter px-[50px] 2xl:ps-[250px] pt-[10vh] lg:pt-[20vh] me-[70px] lg:me-[450px] text-[24px] text-[#020b10ff]">
            <h1 className="text-[40px] lg:text-[50px] text-[#020b10ff] font-[600]">
                Properties
            </h1>
            <p className=" mb-5">
                This page shows using properties of react components to give them different appearances
            </p>
            <ul className={"mb-5 list-disc ps-6"}>
                <li>Even Items are red</li>
                <li>Prime numbers are blue</li>
                <li>Odd non-primes are green</li>
            </ul>

            <div className={"grid grid-cols-5 lg:grid-cols-10 gap-2"}>
                 {blocks}
            </div>

        </div>
    )
}

export default Properties;