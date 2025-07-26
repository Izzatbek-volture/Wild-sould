import React from 'react'

export default function Sectin() {
  return (
    <div>
      <div className='container-fluidb section'>
        <div className="row">
        <div className="col-md-6 col-12 our">
            <h1>Our Wild Way</h1>
            <p>Our philosophy is present in every stage of our production. We are endeavoring to contribute to the creation of a better world.</p>
            <button className='text-white bg-black btn'>DISCOVER MORE!</button>
        </div>
        <div className="col-md-6 col-12">
            <img src="./img/section.png" className='img img-fluid' alt="" />
        </div>
        </div>
      </div>
      <div className="container-fluid min-vh-100 d-flex align-items-center">
  <div className="container py-5">
    <div className="row align-items-center">
     
      <div className="col-md-6 text-center text-md-start like-div">
        <h1 className="fw-bold">Wild like a<span className="fw-bold">Nut??</span></h1>
        <h4 className="fw-bold mt-4">Roasted Almond</h4>
        <p className="small text-dark">All the treasures are hidden in a chest. Respectively, our treasures are enclosed in their Wild shell.</p>
        <p className="fw-semibold">250G | 5,00€</p>
        <div className="mt-4 d-flex justify-content-center justify-content-md-start">
        <div><button className="btn btn-dark rounded-pill px-4">TASTE IT!</button>
        </div>       
          <div className=" rounded-circle d-inline-block p-4 like-img">
          
            <img src="./img/magiz.png" alt="" className="img-fluid "  />
          </div>
        </div>
      </div>

    
      <div className="col-md-6 mt-5 mt-md-0">
        <p className="text-uppercase small fw-bold">Discover our products through the 5 treasures of nature!</p>
        <ul className="list-unstyled like-ul">
          <li className="d-flex justify-content-between border-bottom py-2"><strong>Sesame</strong> <span>20</span></li>
          <li className="d-flex justify-content-between border-bottom py-2"><strong>Peanut</strong> <span>5</span></li>
          <li className="d-flex justify-content-between border-bottom py-2"><strong>Almond</strong> <span>9</span></li>
          <li className="d-flex justify-content-between border-bottom py-2"><strong>Hazelnut</strong> <span>5</span></li>
          <li className="d-flex justify-content-between border-bottom py-2"><strong>Cashew</strong> <span>4</span></li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
