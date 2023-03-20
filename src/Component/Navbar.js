import React, { useContext } from 'react'
import './Navbar.css'
import Pdata from '../Movieslist'
import myntra from '../image/myntra.png'
import { DataWishlistContext } from '../DataApp'
import Portal from './portal/Portal'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const localContext = useContext(DataWishlistContext)
    const{setsearchData}=localContext
    console.log(localContext)
    const UpdateFn=(e)=>{
        console.log('searchinput - ',e.target.value)
        const res = Pdata.filter((item)=>{
            return item.pname.toLowerCase()===e.target.value
        })
        setsearchData(res)
        console.log('searchingFilter - ',res)
    }
    return (
        <div className='container'>

            <nav className='flex space-between nav'>
                <div className='left flex items-center'><Link to='collection' ><img src={myntra} alt="logo" /></Link>
                    <ul className='flex items-center justify-center uppercase semibold'>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Home </li>
                        <li>Beauty</li>
                        <li>Studio</li>

                    </ul>
                </div>
                <div className='right flex items-center semibold'>
                <input className='search' type='text' onChange={UpdateFn} placeholder='Search...' />
                    <Portal/>
                    {/* <input className='search' type='text' placeholder='Search...' />
                    <div className='profile mx-2 '>Profile</div>

                    <div className='wishlist mx-2'>Wishlist [{wishlist}] </div>
                    <div className='cart mx-2'>Cart ({cart}) </div> */}
                </div>

            </nav>

        </div>
    )
}

export default Navbar