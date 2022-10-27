import React from "react";
import GuineaBee from "../../img/source/1.jpg"
import GuineaBreak from "../../img/source/2.jpg"
import GuineaCado from "../../img/source/3.jpg"
import GuineaPumpkin from "../../img/source/4.jpg"
//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<Jumbotron />
		
    <div className="d-flex flex-wrap m-5 justify-content-around">
      <Card img={(GuineaBee)} />
      <Card img={(GuineaBreak)} />
      <Card img={(GuineaCado)} />
      <Card img={(GuineaPumpkin)} />
		</div>
  <Footer />
		</>
	);
};

//example
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	)
}

const Jumbotron = () => {
	return (
		<div className="jumbotron">
  <strong><h1 className="display-4">Chewy!</h1></strong>
  <p className="lead"><strong>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</strong></p>
  <hr className="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
	);
}

const Card = ({img}) => {
	return (
		<div className="card" style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center">Card title</h5>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    <center><a href="https://image.chewy.com/is/image/catalog/262166_MAIN._AC_SL600_V1624307576_.jpg" className="btn btn-primary">Go somewhere</a></center>
  </div>
</div>
	)
}

const Footer = () => {
  return (
    <footer id="foot" className="d-flex flex-end justify-content-center align-items-center py-3 m-0 border-top bg-dark text-white">
      <center><p className="text-center">© 2022 Company, Inc</p></center>
  
      <a href="/" className="text-center">
        <svg className="text-center" width="40" height="32"></svg>
      </a>
    </footer>
  )
}
export default Home;
