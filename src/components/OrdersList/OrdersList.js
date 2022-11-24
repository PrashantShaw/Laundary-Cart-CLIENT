import "./OrdersList.css";
import {useState ,useEffect} from "react";
import shirt from "../Assests/shirt.svg";
import washingMachine from "../Assets/washing-machine.svg";
import ironImg from "../Assets/ironing.svg";
import dryImg from "../Assets/towel.svg";
import bleachImg from "../Assets/bleach.svg";
import washingMachineSelect from "../Assets/washing-machine-select.svg";
import ironImgSelect from "../Assets/iron-select.svg";
import bleachImgSelect from "../Assets/bleach-select.svg";
const Product = ({ item, totalOrder, setTotalOrder }) => {
  const [wash, setWash] = useState(false);
  const [iron, setIron] = useState(false);
  const [dry, setDry] = useState(false);
  const [bleach, setBleach] = useState(false);
  const [quantity, setQuantity] = useState(0);

let totalPrice = 0;
if (wash) {
  totalPrice += 10;
}
if (iron) {
  totalPrice += 15;
}
if (dry) {
  totalPrice += 10;
}
if (bleach) {
  totalPrice += 30;
}
let services = "";
if (wash) {
  services += "wash,";
}
if (iron) {
  services += "iron,";
}
if (dry) {
  services += "dry,";
}
if (bleach) {
  services += "bleach,";
}

const selectWashTypes = (e) => {
  if (e.target.name === "wash") {
    setWash((wash) => {
      return !wash;
    });
  } else if (e.target.name === "iron") {
    setIron((iron) => {
      return !iron;
    });
  } else if (e.target.name === "dry") {
    setDry((dry) => {
      return !dry;
    });
  } else {
    setBleach((bleach) => {
      return !bleach;
    });
  }
};



totalOrder[item.name] = {
  name: item.name,
  washtype: services,
  quantity: quantity,
  totalPrice: totalPrice,
};


useEffect(() => {
  console.log(item);
}, []);

return (
  <>
    <div className="product_container" style={{ display: "flex" }}>
      <div className="product_detail">
        <img className="product_image" src={item.image} alt="shirt" />
        <div className="product_description">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="product_quantity">
        <input
          style={{ textAlign: "center" }}
          value={quantity}
          onChange={(e) => {
            setQuantity(() => {
              return e.target.value;
            });
          }}
          type={"number"}
        />
      </div>
      <div className="singleproduct_services">
        <img
          name="wash"
          alt="wash"
          className="services wash"
          onClick={(e) => {
            selectWashTypes(e);
          }}
          src={wash ? washingMachineSelect : washingMachine}
        ></img>
        <img
          name="iron"
          alt="iron"
          className="services iron"
          onClick={(e) => {
            selectWashTypes(e);
          }}
          src={iron ? ironImgSelect : ironImg}
        ></img>
        <img
          name="dry"
          alt="dry"
          onClick={(e) => {
            selectWashTypes(e);
          }}
          className="services dry"
          src={dryImg}
          style={{ backgroundColor: `${dry ? "#5861AE" : ""}` }}
        ></img>

        <img
          name="bleach"
          alt="bleach"
          onClick={(e) => {
            selectWashTypes(e);
          }}
          className="services bleech"
          src={bleach ? bleachImgSelect : bleachImg}
        ></img>
      </div>
      <div className="product_price">
        {quantity === 0 ? (
          "--"
        ) : (
          <p className="product_price_calc">
            {quantity}X{totalPrice}= <strong>{quantity * totalPrice}</strong>
          </p>
        )}
      </div>
      
    </div>
  </>
);
};

export default Product;