import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
        <img width={'500px'} height={'250px'} src="https://www.nicepng.com/png/detail/84-847295_grocery-shopping-cart-png-download-image-shopping-cart.png" alt="" />
        <div>
          <h3 className='font-bold'>PID: id</h3>
          <h1 className='text-5xl font-bold'>Title</h1>
          <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
          <h4>Brand :</h4>
          <h4>Category :</h4>
          <p>
             <span className='font-bold'>Description</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illum dolore est sed quos deleniti nesciunt voluptas officiis soluta debitis? Eius earum officiis optio ducimus dolorem fugiat quos amet voluptatum.
          </p>
          <div className='flex justify-between mt-5'>
            <button className='bg-blue-600 rounded text-white p-2'>Add to Wishlist</button>
            <button className='bg-green-600 rounded text-white p-2'>Add to cart</button>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default View