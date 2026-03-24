import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaRegHeart, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa'

const Header = () => {

    const [menu, setMenu] = useState(false);

    const navStyle = ({ isActive }) =>
        `relative pb-1 transition duration-300 
        ${isActive 
            ? "text-orange-400 after:w-full" 
            : "text-white hover:text-orange-400 after:w-0 hover:after:w-full"
        } 
        after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300`;

    return (
        <>
            <header className='bg-black shadow-md text-white sticky top-0 z-50'>

                <div className='flex justify-between items-center px-6 md:px-12 py-4'>

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold">
                        <span className='text-orange-400'>LUx</span>TICK
                    </Link>

                    {/* Desktop Menu */}
                    <nav className='md:flex hidden items-center gap-16'>
                        <NavLink to="/" className={navStyle}>Home</NavLink>
                        <NavLink to="/shop" className={navStyle}>Shop</NavLink>
                        <NavLink to="/collection" className={navStyle}>Collection</NavLink>
                        <NavLink to="/about" className={navStyle}>About</NavLink>
                        <NavLink to="/contact" className={navStyle}>Contact</NavLink>
                    </nav>

                    
                    <div className='items-center flex gap-5'>
                        <NavLink to="/login" className="hidden md:flex gap-2 items-center hover:text-orange-400">
                            <FaUser /> Login
                        </NavLink>
                        <NavLink to='wishlist' className="hover:text-orange-400">
                            <FaRegHeart />
                        </NavLink>
                        <NavLink to='/add-to-cart' className="hover:text-orange-400">
                            <FaShoppingCart />
                        </NavLink>

                        <div className='md:hidden  text-xl cursor-pointer' onClick={() => setMenu(!menu)}>
                        {menu ? <FaTimes /> : <FaBars />}

                    </div>

                    </div>

                   
                    
                </div>

                
                <div className={`md:hidden bg-black px-6 overflow-hidden transition-all duration-300 
                ${menu ? "max-h-[400px] py-4" : "max-h-0"}`}>

                    <nav className='flex flex-col gap-4 mb-4'>
                        <NavLink onClick={() => setMenu(false)} to="/" className={navStyle}>Home</NavLink>
                        <NavLink onClick={() => setMenu(false)} to="/shop" className={navStyle}>Shop</NavLink>
                        <NavLink onClick={() => setMenu(false)} to="/collection" className={navStyle}>Collection</NavLink>
                        <NavLink onClick={() => setMenu(false)} to="/about" className={navStyle}>About</NavLink>
                        <NavLink onClick={() => setMenu(false)} to="/contact" className={navStyle}>Contact</NavLink>
                    </nav>

                  
                    <div className='border-t border-gray-700 my-3'></div>

                   
                    <NavLink 
                        onClick={() => setMenu(false)} 
                        to="/login" 
                        className="flex items-center gap-3 hover:text-orange-400"
                    >
                        <FaUser /> Login
                    </NavLink>
                    

                </div>
             

            </header>
        </>
    )
}

export default Header