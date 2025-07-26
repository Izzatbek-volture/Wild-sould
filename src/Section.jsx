import React from 'react'

export default function Section() {
  return (
    <div>
       
  <div className="section-top">
    <div className="container">
      <h5>WORDS FROM THE SOUL!</h5>
      <div className="row justify-content-center">
        <div className="col-md-5 text-center">
          <img src="./img/lab.png" alt="" className="icon-lips" />
          <h6>POPANGADA</h6>
          <p>A different shop in the center of Athens grinds fruit, offers butter made from just one ingredient, and halva flavors that confirm that healthy can be delicious.</p>
        </div>
        <div className="col-md-5 text-center">
          <img src="./img/lab.png" alt="" className="icon-lips" />
          <h6>ATHENS VOICE</h6>
          <p>Wild Souls works mainly with sesame and nut products (pistachio, hazelnut, almond, cashews), creating hellish spreads that you want to swallow with the jar.</p>
        </div>
      </div>
    </div>
  </div>

  
  <div className="concept-section text-center">
    <div className="container">
      <div className="circle-logo">
        <img src="./img/pechat2.png" alt="" className='img img-fluid' />
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6 text-lg-start text-center mb-4 mb-lg-0">
          <h2 className="fw-bold">The Concept Store</h2>
          <p>We invite you to explore it, live it, and take photographs of it. But be careful, it is very addictive!</p>
          <button className="btn-discover">DISCOVER MORE!</button>
        </div>
        <div className="col-lg-6 text-center">
          <img src="./img/concept.png" alt="" className="concept-img img-fluid" />
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
