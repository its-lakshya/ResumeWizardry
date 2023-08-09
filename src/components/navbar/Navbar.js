

const Navbar = () => {
    return(
        <div className='w-full h-20 font-bold flex justify-center bg-white bg-opacity-95 shadow-lg shadow-gray-'>
            <div className='w-3/4 flex justify-between items-center'>
            <span className="font-bold text-3xl text-[#003459] -mt-2">ResumeWisardry</span>
            <ul className='flex justify-center gap-x-10 font-medium text-lg text-[#003459]'>
                <li className='hover:text-[#EA4492]'>Resume App</li>
                <li className='hover:text-[#EA4492]'>Resume Tips</li>
                <li className='hover:text-[#EA4492]'>Templates</li>
                <li className='hover:text-[#EA4492]'>About</li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar