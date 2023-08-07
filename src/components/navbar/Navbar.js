

const Navbar = () => {
    return(
        <div className='w-full h-20 font-bold flex justify-center bg-white bg-opacity-95'>
            <div className='w-3/4 flex justify-between items-center'>
            <span className="font-bold text-3xl text-[#003459] -mt-2">ResumeWisardry</span>
            <ul className='flex justify-center gap-x-10 font-medium text-lg text-[#003459]'>
                <li className=''>Resume App</li>
                <li>Resume Tips</li>
                <li>Templates</li>
                <li>About</li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar