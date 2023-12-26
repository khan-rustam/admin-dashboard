import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderType, OrderItemType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "23456787654",
    quantity: 6,
    price: 2000,
  },
];

function TransactionManagement() {
  const [order, setOrder] = useState<OrderType>({
    name: "Rustaam khan",
    address: "28 Raja Park",
    city: "New York",
    state: "Rajasthan",
    country: "INDIA",
    pinCode: 305202,
    status: "Processing",
    subtotal: 2500,
    tax: 456,
    discount: 500,
    shippingCharges: 0,
    total: 2500 + 456 + 0 - 456,
    orderItems,
    _id: "23456787654",
  });

  const {
    name,
    address,
    city,
    country,
    pinCode,
    state,
    status,
    subtotal,
    tax,
    shippingCharges,
    discount,
    total,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="management">
        <section style={{ padding: "2rem" }}>
          <h2>Order Items</h2>

          {order.orderItems.map((i) => (
            <ProductCard
              name={i.name}
              photo={i.photo}
              _id={i._id}
              quantity={i.quantity}
              price={i.price}
            />
          ))}
        </section>

        <article className="shipping-info-card">
          <h1>Order Item</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address:`${address}, ${city}, ${state}, ${country}, ${pinCode}`
          </p>

          <h5>Amount Info</h5>
          <p>SubTotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "green"
                  : status === "Shipped"
                  ? "purple"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
}

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
);

export default TransactionManagement;
