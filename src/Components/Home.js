import React, { useState } from 'react'
import { cuisineData,restaurantsData } from '../data'
import RestaurantCard from '../RestaurantCard';

const Home = () => {

	const [resData, setResData] = useState(restaurantsData)
	const [filteredData, setFilteredData] = useState(resData)

	const handleFilterRes = (res) => {
		const data = restaurantsData.filter(resData => resData.id === res.id)
		console.log(data)
		// console.log("clicked")
		setFilteredData(data)
	 }

  return (
		<div className="mt-10 flex flex-col mx-auto items-center">
			<h1 className="text-4xl font-bold">Food Ordering App</h1>
			<h2 className="text-2xl mt-10">Select Your Cuisine</h2>
			<div className='flex space-x-4 mb-5'>
				{cuisineData.map((cuisine) => (
					<button onClick={()=>handleFilterRes(cuisine)} key={cuisine.id} className="mt-5 bg-[#ef4f5f] text-white py-2 px-3 rounded-lg cursor-pointer">
						{cuisine.name}
					</button>
				))}
		  </div>
		  <div>
			  {filteredData.map(res => <RestaurantCard card={res} key={res.id} />)}
			  {/* <RestaurantCard/> */}
		  </div>
		</div>
	);
}

export default Home
