import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { restaurantsData } from "../data";
import Review from "./Review";

const RestuarantDetail = () => {
	const [reviewPopUp, setReviewPopUp] = useState(false);

	const { name } = useParams();

	const navigate = useNavigate();

	const resData = restaurantsData.filter((res) => res.name === name);

	const {
		id,
		cuisine_id,
		address,
		phone,
		menu,
		ratings,
		averageRating,
		description,
	} = resData[0];

	return (
		<div>
			<div className=" flex items-start p-5">
				<button onClick={() => navigate("/")}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
						/>
					</svg>
				</button>
				<div className="max-w-[900px] mx-auto shadow-lg p-3">
					<div className="flex  justify-between items-center  mb-2">
						<div>
							<h1 className="text-3xl">{resData[0].name}</h1>
							<p className="text-gray-400">{description}</p>
							<p className="text-gray-400">{address}</p>
							<p className="text-gray-400">{averageRating}</p>
						</div>
						<button
							className="bg-[#ef4f5f] text-white rounded-lg cursor-pointer py-1 px-3"
							onClick={() => setReviewPopUp(!reviewPopUp)}
						>
							Add Review
						</button>
					</div>
					<div className="border-gray-300 border-b-2 mt-3 mb-5"></div>
					<div>
						<h2 className="font-bold text-xl">Reviews</h2>
						{ratings?.map((review) => (
							<div className="space-y-2 mt-5" key={review.revName}>
								<div className="flex justify-between items-center">
									<div className="flex items-center space-x-2">
										<img
											className="max-w-10 rounded-full"
											alt="user=pp"
											src={review?.pp}
										/>
										<p>{review?.revName}</p>
									</div>
									<p className="bg-green-700 text-yellow-400 px-2 py-1 rounded-md">
										{review?.rating} ⭐️
									</p>
								</div>
								<p>{review?.comment}</p>
								<div className="border-gray-300 border-b-2"></div>
							</div>
						))}
					</div>
				</div>
			</div>
			{reviewPopUp && (
				<div className="absolute z-10 mx-auto">
					<Review />
				</div>
			)}
		</div>
	);
};

export default RestuarantDetail;
