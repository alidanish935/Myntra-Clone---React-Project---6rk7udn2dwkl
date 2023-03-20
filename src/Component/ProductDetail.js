import React, { useContext, } from 'react'
import { useParams } from 'react-router-dom'
import { DataWishlistContext } from '../DataApp'
import Pdata from '../Movieslist'

const ProductDetail = () => {
    const localContext = useContext(DataWishlistContext)
    const { setWishlist,wishlist} = localContext
    const temp = useParams()
    console.log('tempid- ', temp.id)
    console.log('typetempid- ', typeof(temp.id))

    
    let val =temp.id;
    const result = Pdata.filter((item) => {
        return item.id === parseInt(val)
    })
    console.log('result - ', result)

    const res = result.map((obj) => {
        return obj.size
    })
    console.log('catogary- ', res)

    const updateWishlistFn = (id) => {
        setWishlist(wishlist => [...wishlist,id])
        console.log(wishlist)
    }

    return (
        <div>
            <div>
                {

                    result.map((item) => (
                        <div className='flex imageDetailMain'>
                            <div className=' imageTitle'>

                                   
                                <h3>{item.category}</h3>

                                <div className='flex productDetailImges'>
                                    <div className='imageDetailInside'><img src={item.imgscr} width='330px' alt='product' /> </div>
                                    <div className='imageDetailInside'><img src={item.img2} width='330px' alt='product' /> </div>
                                    <div className='imageDetailInside'><img src={item.img3} width='330px' alt='product' /> </div>
                                    <div className='imageDetailInside'><img src={item.img4} width='330px' alt='product' /> </div>
                                </div>


                            </div>
                            <div className='imageDescription'>
                                <h2>{item.pname.toUpperCase()} </h2>
                                <div className='imageDescription_product'>{item.product}</div>
                                <div className='line'></div>
                                <p>{item.description}</p>
                                <h2>{item.price}/-</h2>
                               <div className='flex  '>
                                {
                                    item.size.map((obj)=>(
                                        <div className='roundDiv flex  items-center justify-center'>{obj}</div>
                                        
                                    ))
                                }
                               </div>
                                <div className='flex '> 
                                <button className='button' onClick={()=>updateWishlistFn(item)} > Add to wishlist</button>

                                {/* <button className='button' onClick={(e) => setWishlist(whishlist => whishlist + 1)} >Add to wishlist</button> */}
                                <button  className='button'>Buy</button>
                                {/* onClick={(e) => setCart(cart => cart + 1)} */}
                                   </div>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default ProductDetail