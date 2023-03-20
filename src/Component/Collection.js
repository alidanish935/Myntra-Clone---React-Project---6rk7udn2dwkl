import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Collection.css'
import Sidebar from './Sidebar'
import { DataWishlistContext } from '../DataApp'
import { Pdata } from '../Movieslist'



const Collection = () => {
    console.log('pdata', Pdata)
    const localContext = useContext(DataWishlistContext)
    const { wishlist, setWishlist, searchData } = localContext
    console.log('searchdata - ',searchData)

    const [data, setData] = useState([])

    // setData(searchData)
    const updateWishlistFn = (id) => {
        setWishlist(wishlist => [...wishlist,id])
        console.log(wishlist)
    }

    return (
        <div>


            <div>
                <div className='divider_div'>
                    <h3>Filter Holder</h3>
                    <div>
                        <div className='sort-holder'>
                            {/* <label for='select'></label> */}
                            <select className='select' id='select'>
                                <option > Sort by :Recomended</option>
                                <option value=''>What's New</option>
                                <option value=''>Price low to high</option>
                                <option value=''>Better Discount</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex '>
                    <div className='sidebar'>

                        <Sidebar data={data} setData={setData} searchData={searchData} />

                    </div>
                    <div className='content'>
                        {
                            data ? data.map((item) => {
                                return <div className='flex list'>
                                    <div >
                                        <div>
                                            <Link to={`/product/${item.id}`}> <img src={item.imgscr} alt='danish' className='images' /></Link>
                                        </div>
                                        <div className='pname'>{item.pname.toLocaleUpperCase()} </div>
                                        <div className='price'>{item.product} </div>

                                        <div className=' flex'><span>{item.title}</span>
                                            < span className='price'>{item.price}/-</span></div>
                                        <button className='button' onClick={()=>updateWishlistFn(item)} > Add to wishlist</button>
                                    </div>
                                </div>
                            }) : searchData && searchData.map((item) => {
                                return <div className='flex list'>
                                    <div >
                                        <div>
                                            <Link to={`/product/${item.id}`}> <img src={item.imgscr} alt='danish' className='images' /></Link>
                                        </div>
                                        <div className='pname'>{item.pname.toLocaleUpperCase()} </div>
                                        <div className='price'>{item.product} </div>

                                        <div className=' flex'><span>{item.title}</span>
                                            < span className='price'>{item.price}/-</span></div>
                                        <button className='button' onClick={updateWishlistFn} > Add to wishlist</button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Collection