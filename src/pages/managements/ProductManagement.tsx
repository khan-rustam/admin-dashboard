import { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

function ProductManagement() {
  const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

  const [name, setName] = useState<string>("Air Jordan");
  const [price, setPrice] = useState<number>(12000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img2);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImageHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        if(typeof reader.result === "string")setPhotoUpdate(reader.result)
      };
    }
  };



  const submitHandler = (e:FormEvent<HTMLElement>)=>{
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  }

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="management">
        <section>
          <strong>ID - 234567898765</strong>
          <img src={photo} alt="product-image" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red">Not-Available</span>
          )}
          <h3>${price}</h3>
        </section>

        <article onSubmit={submitHandler}>
          <form>
            <h2>Manage Products</h2>
            <div>
              <label>Name:</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={priceUpdate}
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock:</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={stockUpdate}
                onChange={(e) => setStockUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Photo:</label>
              <input required type="file" onChange={changeImageHandle} />
            </div>
            {photoUpdate && <img src={photoUpdate} alt="photo" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
}

export default ProductManagement;
