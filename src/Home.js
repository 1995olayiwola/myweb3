import React from 'react';
import './Home.css';
import local from './images/local.jpg';
import img4 from './images/img4.jpg';
import Product from './Product';

function Home(Props) {
    return (
        <div className="home">
         <div className="home__container">
             <img src={local} className="home__image"/>
             
             <div className="home__row">
                 <Product id="1" title="Semo vita" image={img4} price="1500"rating={5}/>
                  <Product id="2" title="Semo vita" image={img4} price="1000"rating={5}/>
                 
                 
             </div> 
             <div className="home__row">
                  <Product id="3" title="Semo vita" image={img4} price="1500"rating={5}/>
                   <Product id="4"title="Semo vita" image={img4} price="1500"rating={5}/>
                    <Product id="5" title="Semo vita" image={img4} price="1500"rating={5}/>
             </div>
             <div className="home__row">
                 <Product id="6"  title="Semo vita" image={img4} price="1500"rating={5}/>
             </div> 
        </div>
        </div>
    )
}

export default Home;
