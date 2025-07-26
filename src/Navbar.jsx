import React from 'react'

export default function Nabar() {
  return (
    <div>
       
  

  
  <div className="hero-section text-center text-white py-5">
    <div className="container">
      <div className="navbar navbar-expand-lg navbar-light  ">
    <div className="container-fluid">
      <a className="navbar-brand fw-bold" href="#">WILD SOUL</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#">PRODUCTS</a></li>
          <li className="nav-item"><a className="nav-link" href="#">WHO WE ARE</a></li>
          <li className="nav-item"><a className="nav-link" href="#">CONCEPT STORE</a></li>
          <li className="nav-item"><a className="nav-link" href="#">RECIPES</a></li>
          <li className="nav-item"><a className="nav-link" href="#">LOG IN</a></li>
          <li className="nav-item"><a className="nav-link" href="#">CART (0)</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="d-flex justify-content-center mt-4">
      <img src="./img/Frame.png" alt="" className='img img-fluid'/>
      </div>
      <h1 className="display-4 fw-bold">Taste the Wild. <br />Find your Soul.</h1>
    </div>
  </div>

  
  <div className="wildly-loved py-5">
    <div className="container-fluid">
      <div className="text-center mb-4">
        <img src="./img/pechat.png.png" alt="" className="img-fluid mb-2"  />
        <h2 className="fw-bold">Wildly Loved</h2>
        <p>You will find our wild products in their simplest form. No additives or anything else can spoil their nature</p>
      </div>

      <div className="row text-center">
        
        <div className="col-md-4 mb-4">
          <img src="./img/main.png" alt="" className="img-fluid mb-2"  />
          <h5 className="fw-bold">The Wild Peanut Butter</h5>
          <p>€4,90</p>
          <button className="btn btn-success">BUY NOW!</button>
        </div>

        
        <div className="col-md-4 mb-4">
          <img src="./img/main2.png" alt="" className="img-fluid mb-2"  />
          <h5 className="fw-bold">Tahini with Cocoa & Honey</h5>
          <p>€5,90</p>
          <button className="btn btn-dark">BUY NOW!</button>
        </div>

        
        <div className="col-md-4 mb-4">
          <img src="./img/main3.png" alt="" className="img-fluid mb-2"  />
          <h5 className="fw-bold">The Wild Hazelnut Butter</h5>
          <p>€6,90</p>
          <button className="btn btn-primary">BUY NOW!</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
