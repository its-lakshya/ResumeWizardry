

const Navbar = () => {
    return(
        <div className='w-full h-20 font-bold flex items-center justify-center'>
            <div className='w-3/4 flex justify-between'>
            <span>Logo</span>
            <ul className='flex justify-center gap-x-10 font-normal text-lg'>
                <li>Resume App</li>
                <li>Resume Tips</li>
                <li>Templates</li>
                <li>About</li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar