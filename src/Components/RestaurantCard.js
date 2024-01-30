import React from "react";
import { NavLink } from "react-router-dom";

const RestaurantCard = ({ card }) => {
	const { name, menu } = card;

	return (
		<div className="mb-8">
			<h2 className="text-2xl font-bold">Dishes by {name}</h2>
			<NavLink to={`/restaurantdetails/${card.name}`} key={name}>
				<div className="flex space-x-4 mt-5">
					{menu.map((recipe) => {
						const { imgSrc, name, price, qty } = recipe;
						return (
							<div key={name} className="rounded-lg shadow-lg">
								<img
									className="max-w-60 max-h-60 rounded-t-lg"
									alt="dish-img"
									src={imgSrc}
								/>
								<div className="p-3">
									<p className="font-bold">{name}</p>
									<p className="text-gray-500">
										Rs. {price} for {qty}
									</p>
									<p className="text-gray-500">{card?.name}</p>
								</div>
							</div>
						);
					})}
				</div>
			</NavLink>
		</div>
	);
};

export default RestaurantCard;
