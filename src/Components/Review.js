import React from 'react'

const Review = () => {
  return (
		<div className="bg-[#ef4f5f] text-white max-w-72 p-3 space-y-5 rounded-md" >
			<h1>Add Your Review</h1>
			<div>
				<label>Rating: </label>
				<select className='text-black'>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</div>
			<div>
				<labek>Comment:</labek>
				<input type="text" className=" rounded-md text-black" />
			</div>
		</div>
	);
}

export default Review
