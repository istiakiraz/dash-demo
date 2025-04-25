import React, { useState } from "react";

const initialProducts = [
  {
    name: "Wireless Bluetooth Earbuds",
    image: "https://media.istockphoto.com/id/1204039347/photo/apple-airpods-on-a-white-background.jpg?s=612x612&w=0&k=20&c=2__4hfynkvBt7PA0UE7N5JxSTuaGRFVKaXJUuoQlBzk=",
    price: 2500,
    discount: 10,
    uploader: "TechShopBD",
  },
  {
    name: "Smart Fitness Watch",
    image: "https://i.ibb.co.com/hFRv2zxQ/download.jpg",
    price: 3200,
    discount: 15,
    uploader: "FitGear",
  },
  {
    name: "Leather Office Bag",
    image: "https://ssbleather.com/wp-content/uploads/2025/03/1-2025-03-02T135441.319.jpg",
    price: 1850,
    discount: 5,
    uploader: "BagHub"
  },
  {
    name: "Gaming Mouse RGB",
    image: "https://www.techlandbd.com/image/cache/catalog/PC-POWER/pc-power-pgm105-wired-rgb-gaming-mouse-black-400x280h.jpg",
    price: 1450,
    discount: 20,
    uploader: "GadgetZone"
  },
  {
    name: "Noise Cancelling Headphones",
    image: "https://www.gadstyle.com/wp-content/uploads/2024/10/ugreen-hp203-hitune-max5c-anc-bluetooth-headphone-35757-1.webp",
    price: 4600,
    discount: 25,
    uploader: "SoundMaster"
  },
  {
    name: "Laptop Cooling Pad",
    image: "https://techtown.com.bd/wp-content/uploads/2024/07/Havit-F2078-Laptop-Cooling-Pad.webp",
    price: 890,
    discount: 10,
    uploader: "TechWorld"
  },
  {
    name: "USB-C Fast Charger",
    image: "https://app-area.riointernational.com.bd/productImages/17131951574E4HV.jpg",
    price: 750,
    discount: 12,
    uploader: "ChargeHub"
  },

  
];

const Product = () => { const [products, setProducts] = useState(initialProducts);
const [editingIndex, setEditingIndex] = useState(null);
const [editedProduct, setEditedProduct] = useState({});

const handleRemove = (index) => {
  const updated = [...products];
  updated.splice(index, 1);
  setProducts(updated);
};

const handleAdd = () => {
  const newProduct = {
    name: "New Product",
    image: "https://example.com/products/new.jpg",
    price: 999,
    discount: 5,
    uploader: "NewVendor",
  };
  setProducts([...products, newProduct]);
};

const handleEdit = (index) => {
  setEditingIndex(index);
  setEditedProduct(products[index]);
};

const handleSave = () => {
  const updated = [...products];
  updated[editingIndex] = editedProduct;
  setProducts(updated);
  setEditingIndex(null);
};

const handleChange = (e) => {
  setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
};

return (
  <div className="p-4 bg-gray-50 min-h-screen">
    <div className="  mx-auto overflow-x-auto">
      <button
        onClick={handleAdd}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Product
      </button>
      <table className="w-full min-w-[640px] border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Image</th>
            <th className="p-2">Name</th>
            <th className="p-2">Uploader</th>
            <th className="p-2">Price</th>
            <th className="p-2">Discount</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="p-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 object-cover rounded"
                />
              </td>
              <td className="p-2">
                {editingIndex === index ? (
                  <input
                    name="name"
                    value={editedProduct.name}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  product.name
                )}
              </td>
              <td className="p-2">
                {editingIndex === index ? (
                  <input
                    name="uploader"
                    value={editedProduct.uploader}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  product.uploader
                )}
              </td>
              <td className="p-2">
                {editingIndex === index ? (
                  <input
                    name="price"
                    value={editedProduct.price}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  `৳${product.price}`
                )}
              </td>
              <td className="p-2">
                {editingIndex === index ? (
                  <input
                    name="discount"
                    value={editedProduct.discount}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  `-${product.discount}%`
                )}
              </td>
              <td className="p-2 space-x-2">
                {editingIndex === index ? (
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemove(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}

export default Product;
