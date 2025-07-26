import React from 'react'

export default function Halva() {
  return (
    <div className='halva'>
      
  
  <div className="section d-flex flex-wrap">
    <div className="col-lg-6 p-4 section-blue text-center text-lg-start">
      <h2>Wild Halva</h2>
      <p>A magical seed...</p>
      <img src="./img/halva.png" alt="" className="img-fluid my-3"  />
      <p>500G | FROM 4.90€</p>
      <button className="btn-black">DISCOVER WILD HALVA</button>
    </div>
    <div className="col-lg-6 p-4 section-red text-center text-lg-start">
      <h4>Spread your Lovewith a Wild Gift!</h4>
      <img src="./img/qol2.png" alt="" className="img-fluid my-3"  />
      <button className="btn-black">DISCOVER WILD GIFT</button>
    </div>
  </div>

  
  
    <div className="concept-section text-center">
    <div className="container container-fluid">
      <div className="circle-logo">
        <img src="./img/pechat3.png" alt="" className='img img-fluid' />
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6 text-lg-start text-center mb-4 mb-lg-0">
          <h2 className="fw-bold">The Five Treasures</h2>
          <p>As Hippocrates said, we are what we eat.
Let’s see what happens by eating these WILD treasures.</p>
          <button className="btn-discover">DISCOVER THEM NOW!</button>
        </div>
        <div className="col-lg-6 text-center">
          <img src="./img/five.png" alt="" className="concept-img img-fluid" />
        </div>
      </div>
    </div>
  </div>
  

  
  <div className="section text-center">
    

    <div className="row mt-5">
        <h2>Wild Recipes</h2>
    <p>Take a look at the recipes for your Wild lifestyle! Eat ideas are here to turn your routine into a wild ride.</p>
      <div className="col-md-4 mb-4">
        <img src="./img/repiec.png" alt="" className="recipe-img" />
        <div className="mt-2 label">SALTY</div>
        <div className="recipe-title">Coleslaw with High Fibre Tahini</div>
      </div>
      <div className="col-md-4 mb-4">
        <img src="./img/repiec2.png" alt="" className="recipe-img" />
        <div className="mt-2 label">SALTY</div>
        <div className="recipe-title">Wild Hummus</div>
      </div>
      <div className="col-md-4 mb-4">
        <img src="./img/repiec3.png" alt="" className="recipe-img" />
        <div className="mt-2 label">SWEET</div>
        <div className="recipe-title">Wild 6 Ingredient Granola</div>
      </div>
    </div>
  </div>
    </div>
  )
}
