import { useEffect, useState } from "react"


function Section(){
    const [second,setSecond]=useState(0);

    useEffect(()=>{

        const intervalId = setInterval(() => {
            setSecond(prev => prev + 1); // ✅ Increment second
        }, 1000);

        // console.log("Section has re-rendered")

        return () => clearInterval(intervalId); 

    },[])

    useEffect(()=>{
        console.log("Section has re-rendered")
    })

    return(
        <>
        <h2>time on section page :{second}</h2>
        </>
    )
}

export default Section