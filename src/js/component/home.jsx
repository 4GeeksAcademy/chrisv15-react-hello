import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container">
			<div class="row">
				<Navbar />
				<Jumbotron />
			</div>
			<div class="row">
				<div class="col-sm"><Card /></div>
				<div class="col-sm"><Card /></div>
				<div class="col-sm"><Card /></div>
			</div>
		</div>
	);
};

export default Home;
