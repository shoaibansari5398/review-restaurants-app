import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import RestuarantDetail from "./Components/RestuarantDetail";
import Review from "./Components/Review";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/restaurantdetails/:name" element={<RestuarantDetail />} />
					<Route path="/review" element={<Review/>} />
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
