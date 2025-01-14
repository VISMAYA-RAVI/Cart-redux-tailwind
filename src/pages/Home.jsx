import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../redux/slices/productSlice'
import { useDispatch } from 'react-redux'


const Home = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <>
    <Header insideHome ={true}/>
    <div className='container px-4 mx-auto' style={{paddingTop:'100px'}}>
      <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow'>
          <img height={'200px'} width={'100%'} src="https://www.nicepng.com/png/detail/84-847295_grocery-shopping-cart-png-download-image-shopping-cart.png" alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>title</h3>
            <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More....</Link>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Home