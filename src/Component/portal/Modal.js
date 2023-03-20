import React, { useContext } from 'react'
// import ReactDom from 'react-dom'
import './Modal.css'
import Pdata from '../../Movieslist'
import { DataWishlistContext } from '../../DataApp'

const Modal = (props) => {
  const localContext = useContext(DataWishlistContext)
  const { wishlist } = localContext
  console.log('wishlist....in modal ', wishlist)

  const { open, setIsOpen } = props
  console.log('pdatamodal', Pdata)

  
  if (!open) return null;
  //   ReactDom.createPortal
  return (
    <div  className='modal_fullpage'>

      <div className='modaal'>
        <button onClick={()=>setIsOpen(false)}>X</button>
        {
          wishlist.map((item,index) => (
            <div className='flex'>

              <div>{index+1}</div>
              <div className='imageDetailInside'><img src={item.imgscr} width='150px' alt='product' /> </div>
             <div>
             <h2>{item.pname.toUpperCase()} </h2>
             <div>{item.product}</div>
                                
             <p>{item.description}</p>
              <h2>{item.price}/-</h2>
             </div>
            </div>
          ))

        }
      {wishlist.length > 0 && <button className='button' onClick={()=>setIsOpen(false)}>Buy</button>}
      </div>

    </div>
    // document.getElementById('portal')
  )
}

export default Modal