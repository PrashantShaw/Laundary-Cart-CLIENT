import { useEffect,useState } from "react";



const CreateOrder = () => {

const { user } = Usestate();
  const navigate = useNavigate();
  const totalOrderInitial = {
    Shirts: {},
    Tshirts: {},
    Trousers: {},
    Jeans: {},
    Joggers: {},
    Boxers: {},
  };
  const [products, setProducts] = useState([]);
  const [totalOrder, setTotalOrder] = useState(totalOrderInitial);
  const getProducts = async () => {
    
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isopenmodal,
    onOpen: onopenmodal,
    onClose: onclosemodal,
  } = useDisclosure();

  /////////Find Final Price and Quantity//////
  let FinalPrice = 0;
  let FinalQuantity = 0;
  for (const item of Object.keys(totalOrder)) {
    if (totalOrder[item].quantity > 0) {
      let singleProductPrice =
        totalOrder[item].quantity * totalOrder[item].totalPrice;
      FinalPrice += singleProductPrice;
      FinalQuantity += parseInt(totalOrder[item].quantity);
    }
  }

  const handleConfirm = async () => {
    const order = {
      userId: user.userid,
      totalQuantity: FinalQuantity,
      totalPrice: FinalPrice + 90,
      storeLocation: location,
      PhoneNo: storeLocations[location].phone,
      city: storeLocations[location].city,
      Address: storeLocations[location].address,
      ...totalOrder,
    };
   
    }
  

  const handleCancel = () => {};
  console.log(totalOrder);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      
        
        <div className="products_container">
          <header className="product_header">
            <div>Product Types</div>
            <div>Quantity</div>
            <div>Wash Type</div>
            <div>Price</div>
          </header>
          {/* {products.map((item,index) => {
            return (
              <Product
                totalOrder={totalOrder}
                setTotalOrder={setTotalOrder}
                key={item._id}
                item={item}
                imgs={images[0]}
              />
            );
          })} */}
        </div>
        <div className="order_btn">
          <button onClick={handleCancel} className="cancel_btn">
            Cancel
          </button>
          <button onClick={onOpen} className="proceed_btn">
            Proceed
          </button>
        </div>
        </>
  )
        }