import './index.css';
import img4 from "./img4.webp";
import img5 from "./img5.jpg" ;
import img6 from "./img6.jpg";
import img8 from "./img8.webp";
import img9 from "./img9.jpg";
import img10 from "./img10.jpg";
const Shop = () => (
    <div className="container">
      <h2>Our Flowers</h2>
      <div className="shop-images">
        <img src={img4} alt="Flower 1" />
        <img src={img5} alt="Flower 2" />
        <img src={img6} alt="Flower 3" />
        <img src={img8} alt="Flower 4" />
        <img src={img9} alt="Flower 5" />
       
      </div>
    </div>
  );
  
  export default Shop;