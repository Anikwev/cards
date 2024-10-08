import './App.css'
import { IoCarSportSharp } from "react-icons/io5";
import { PiMotorcycleBold } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { useEffect, useState } from 'react';
import carData from './CarsData';

function App() {

const [primary, changer]=useState(carData)

const buttonPlay = (bodytype)=>{
  const filtering = carData.filter((CarType)=>{
    return CarType.category == bodytype
  })
  changer(filtering)
}

useEffect(() => {
  const cards = document.querySelectorAll('.mainbox');
  
  cards.forEach(card => {
  card.classList.remove('animation-data');
   requestAnimationFrame(() => {
  requestAnimationFrame(() => {
  card.classList.add('animation-data');
  });
  });
  });
  }, [primary]);

  return (
    <>
    <nav className=' w-full h-[100px] bg-gradient-to-r from-[#30ffe0] to-[#975ee7] flex justify-between items-center'>
      <div className="container flex justify-between items-center">
        <img className=' w-[130px] h-[80px]' src="public/logo o2.png" alt="logo" />
        <ul className=' flex gap-5'>
          <button onClick={()=>changer(carData)} className=' w-[100px] h-[50px] bg-lime-300 text-red-600 rounded-3xl text-2xl font-bold'>All</button>
          <button onClick={()=>buttonPlay('Supercar')} className=' w-[160px] h-[50px]  bg-lime-300 text-red-600 rounded-2xl text-xl font-medium flex justify-center items-center gap-2 '><IoCarSportSharp className=' text-3xl'/>BMW CAR </button>
          <button onClick={()=>buttonPlay('SUV')} className=' w-[160px] h-[50px]  bg-lime-300 text-red-600 rounded-2xl text-xl font-medium flex justify-center items-center gap-2'><PiMotorcycleBold className=' text-4xl'/>BIke</button>
          <button onClick={()=>buttonPlay('Sport Sedan')} className=' w-[160px] h-[50px]  bg-lime-300 text-red-600 rounded-2xl text-xl font-medium flex justify-center items-center gap-2'><FaCar className=' text-3xl'/>Sedans</button>
        </ul>
      </div>
      </nav>
      <div className="container">
        <div className=" flex gap-5 flex-wrap justify-center mt-10">
          {
            primary.map((product, n)=>(
              <div key={n} className="mainbox">

              <div  className="  w-[300px] h-[360px] bg-gradient-to-r from-[#93A5CF] to-[#E4EfE9] rounded-md mb-6">
                <div>
                    

                  {
                  product.discount_price&&
                    <h1 className=' absolute z-[1] bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-lg mt-3 ml-4 text-xl text-[#fff] font-bold'>Offer!</h1>
                  }
                  
            <img className=' w-full h-[180px] rounded-t-md mb-5 relative' src={product.image_url} alt="Car Image" />
            </div>
            <h1 className=' text-center font-bold text-3xl'>{product.model}</h1>
            <h2 className='text-center font-semibold text-xl mt-3 text-[#12166c] '>Horsepower: {product.horsepower} hp</h2>
            <p className=' text-center font-extrabold text-xl mt-3 text-[#6c1e12] '>{product.discount_price? product.discount_price : product.actual_price}<span className='ml-7 text-gray-400 line-through text-center'>{product.discount_price&& product.actual_price}</span> </p>
          </div>
              </div>
            ))
          }
          
        </div>
      </div>
      
    </>
  )
}

export default App

{/*   */}