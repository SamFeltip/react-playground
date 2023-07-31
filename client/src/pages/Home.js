import React from "react";

function HeaderImage({index, name}) {
    return <img key={index} src={"/logos/" + name + ".png"} alt={"logo for " + name} className="h-[50px]"/>;
}

function Home() {

    // I know this is quite verbose and could be hard coded, but I wanted to get used to the map and element syntax
    const header_image_descriptions = [
        "JavaScript",
        "Figma",
        "React",
        "NodeJS",
        "Tailwind"
    ]

    const header_images = header_image_descriptions.map((name, index) => {
        return <HeaderImage key={"HeaderImage" + index} index={index} name={name}/>
    })

    return (
        <div
            className="break-words font-nunito px-[50px] 2xl:ps-[250px] pt-[10vh] lg:pt-[20vh] me-[70px] lg:me-[450px]">
            <div className="pb-10">
                <h1 className="text-[40px] lg:text-[50px] text-[#020b10ff] font-[600]">
                    React Playground
                </h1>
                <h2 className="text-[30px] lg:text-[40px] text-[#020b10ff]">
                    built by Sam Felton
                </h2>
                <h3 className="">
                    <a className="text-[18px] lg:text-[28px] text-[#020b10ff] hover:text-[#0097ee]"
                       href="https://about.samfelton.com">about.samfelton.com</a>
                </h3>
            </div>
            <div className="pb-7">
                <h2 className="text-[30px] lg:text-[40px] text-[#020b10ff]">
                    About
                </h2>
                <p className="text-[18px] lg:text-[28px] text-[#020b10ff]">
                    This page shows off some example pages for when I was learning how to use React
                </p>
            </div>
            <div className='flex flex-row flex-wrap gap-5 justify-center'>
                {header_images}
            </div>
        </div>
    )
}

export default Home;
