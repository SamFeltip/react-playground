import React from "react"
import Sidebar from './Sidebar';

function Header() {
    return (
        <div className="text-red-100 break-words font-nunito px-[50px] 2xl:ps-[250px] pt-[10vh] lg:pt-[20vh] me-[70px] lg:me-[450px]">
            <div className="pb-10">
                <h1 className="text-[40px] lg:text-[50px] text-[#020b10ff] font-[600]">
                    React Playground
                </h1>
                <h2 className="text-[30px] lg:text-[40px] text-[#020b10ff]">
                    built by Sam Felton
                </h2>
                <h3 className="">
                    <a className="text-[18px] lg:text-[28px] text-[#020b10ff] hover:text-[#0097ee]" href="https://about.samfelton.com">about.samfelton.com</a>
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
                <img src="/logos/JavaScript.png" alt="JavaScript logo" className='h-[50px]'/>
                <img src="/logos/Figma.png" alt="Figma logo" className='h-[50px]'/>
                <img src="/logos/NodeJS.png" alt="NodeJS logo" className='h-[50px]'/>
                <img src="/logos/React.png" alt="React Logo" className='h-[50px]'/>
                <img src="/logos/Tailwind.png" alt="Tailwind Logo" className='h-[50px]'/>
            </div>
        </div>
    )
}

function App() {

    const sidebar_items = [
        "Introduction",
        "classes",
        "something else"
    ]

    return (
        <div>
            <Sidebar items={sidebar_items}/>
            <Header/>
        </div>
    )
}

export default App;