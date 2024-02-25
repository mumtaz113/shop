/** @format */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Cartcontext } from "../context/Context";
const Arrival = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <div className="home">
    <div className="row">  
      {data.map((item, index) => {
        
        item.quantity = 1;
        return (
          <div className="col-md-4">
          <div className="p-4 m-4" key={index} style={{}}>
           <div className="blk-img">
           <img src={item.image} alt="" className="img-fluid shadow-lg" style={{height:400,objectFit:'cover'}}/>
           <div className="blk-info">  
            <h3>{item.title}</h3>
            <h5>$. {item.price}</h5>
            <button onClick={() => dispatch({ type: "ADD", payload: item })}>
            <FontAwesomeIcon icon={faBagShopping} />
            </button>
           </div> 
            </div>  
          </div>
          </div> 
        );
      })}
    </div>
    </div>
  );
};

export default Arrival;
