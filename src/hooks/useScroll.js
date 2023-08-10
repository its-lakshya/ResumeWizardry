import { useEffect, useState } from "react"

const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

     const handleScroll = () => {
        const position = window.scrollY
        setScrollPosition(position)
        console.log(position)
     }

     useEffect(() => {
         window.addEventListener('scroll', handleScroll, {passive:true});

         return()=> {
            window.addEventListener('scroll', handleScroll)
         }

     })

     return scrollPosition
}

export default useScroll