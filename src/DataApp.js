import React, { createContext, useState } from 'react'

export const DataWishlistContext = createContext()

const DataApp = (props) => {
    const[wishlist,setWishlist]=useState([])
    const[cart,setCart]=useState(0)
    const[searchData,setsearchData]=useState([])
    

    
  return (
    <div>
        <DataWishlistContext.Provider value={{wishlist,setWishlist,cart,setCart,searchData,setsearchData}}>
            <div>
                {props.children}
            </div>
        </DataWishlistContext.Provider>

    </div>
  )
}

export default DataApp