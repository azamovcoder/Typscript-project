import './Collection2018.scss';

import Collect18Img from "../../assets/colect18.png"
import React from 'react';

const Collection2018: React.FC = () => {
  return (
    <section className="collection-2018">
          <div className="collection-2018__image">
        <img src={Collect18Img} alt="Collection 2018" />
      </div>
      <div className="collection-2018__content">
        <h2>КОЛЛЕКЦИЯ 2018</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non eratum ornare ut mattis habitant dui arcu.
          Sagittis amet nunc mi magna odio nisi in arcu. Varius vestibulum ut in fermentum sed scelerisque magna
          consectetur. Arcu ornare ut mattis habitant dui arcu. Sagittis amet nunc mi magna odio nisi in arcu.
        </p>
        <button className="collection-2018__button">ПОСМОТРЕТЬ КОЛЛЕКЦИЮ</button>
      </div>
    
    </section>
  );
};

export default Collection2018;
