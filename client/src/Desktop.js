import React from "react"

function Header() {
    return (
        <div className="font-nunito flex flex-col justify-start items-start gap-[50px] h-[100vh] w-[70%] px-[50px] pt-[20vh] box-border bg-[rgba(232,247,255,1)]">
            <div className=" flex flex-col justify-start items-start gap-2.5 box-border">
                <h1 className="  text-[#020b10ff]  text-[50px] font-[600]">
                    React Playground
                </h1>
                <h2 className="  text-[#020b10ff]  text-[40px]">
                    built by Sam Felton
                </h2>
                <h3 className="  text-[#020b10ff]  text-[28px]">
                    <a className="hover:text-[#0097ee]" href="https://about.samfelton.com">about.samfelton.com</a>
                </h3>
            </div>
            <div className=" flex flex-col justify-start items-start gap-2.5 w-[100%] box-border">
                <h2 className="  text-[#020b10ff]  text-[40px]">
                    About
                </h2>
                <p className="  text-[#020b10ff]  text-[28px]">
                    This page shows off some example pages for when I was learning how to use React
                </p>
            </div>
            <div className='flex flex-row gap-10 justify-center w-[100%]'>
                <img src="/logos/JavaScript.png" alt="JavaScript logo" className='h-[50px]'/>
                <img src="/logos/Figma.png" alt="Figma logo" className='h-[50px]'/>
                <img src="/logos/NodeJS.png" alt="NodeJS logo" className='h-[50px]'/>
                <img src="/logos/React.png" alt="React Logo" className='h-[50px]'/>
                <img src="/logos/Tailwind.png" alt="Tailwind Logo" className='h-[50px]'/>
            </div>
        </div>
    )
}

function Sidebar() {
    return (
        <div className="text-white font-nunito flex flex-col justify-start items-center gap-[15px] h-screen w-[30%] pt-[20vh] bg-[#0097ee]">
            <p className=" text-white text-[50px]">
                Sections
            </p>
            <div className="text-[28px] flex flex-row justify-center items-center gap-[35px] box-border">
                <table>
                    <tbody>
                    <tr className='hover:text-black cursor-pointer'>
                        <td className='pr-10'>
                            <p>Chapter 1</p>
                        </td>
                        <td className='text-end'>
                            <p>Variables</p>
                        </td>
                    </tr>
                    <tr className='hover:text-black cursor-pointer'>
                        <td>
                            <p>Chapter 2</p>
                        </td>
                        <td className='text-end'>
                            <p>Classes</p>
                        </td>
                    </tr>
                    <tr className='hover:text-black cursor-pointer'>
                        <td>
                            <p>Chapter 3</p>
                        </td>
                        <td className='text-end'>
                            <p>Other stuff</p>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}


function Desktop() {
    return (
        <div className="flex flex-col justify-start w-screen items-center">
            <div className="flex flex-row justify-center w-screen items-start box-border">
                <Header/>
                <Sidebar/>
            </div>
        </div>
    )
}

export default Desktop;