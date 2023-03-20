import React, { useContext, useState } from 'react'
// import './Navbar.css'
import { DataWishlistContext } from '../../DataApp'
import Modal from './Modal'
const Portal = () => {
    const localContext = useContext(DataWishlistContext)
    const[open , setIsOpen]=useState(false)
    const{wishlist}=localContext
    console.log(localContext)
    return (
        <div className='flex'>
           
            <div className='wishlist mx-2' onClick={(e)=>setIsOpen(open=>!open)} >Wishlist [{wishlist.length}] </div>
            {/* <div className='cart mx-2'>Cart</div> */}
            <Modal open={open} setIsOpen={setIsOpen} wishlist={wishlist} />

            <div className='profile mx-2 '>Profile</div>
        </div>
    )
}

export default Portal