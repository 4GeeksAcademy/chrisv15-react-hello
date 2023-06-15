import React from "react";

//create your first component
const Card = () => {
	return (
<div className="card">
      <img src="https://via.placeholder.com/500x350" className="card-img-top" alt="Placeholder" />
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
	);
};

export default Card;