import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const CartItemsList = ({ items }) => {
  const dispatch = useDispatch();

  // const handleAddItem = (item) => {
  //   dispatch(addItem(item));
  // };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 text-white bg-black rounded-lg shadow-lg hover:bg-gray-100 hover:text-black hover:shadow-lg"
                onClick={() => handleRemoveItem(index)}
              >
                remove
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemsList;
