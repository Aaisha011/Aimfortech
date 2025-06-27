import React from "react";
import { EllipsisVertical } from "lucide-react";

const products = [
  {
    image: `https://www.thegoodtrade.com/wp-content/uploads/2024/06/buck-mason-mens-clothing-header.webp`,
    name: "Men's Classic White T-Shirt",
    category: "Men's Clothing",
    price: "₹1240",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXzhuUjrO1e4hPmQuv2-5OtCr7RwK9odeQg&s",
    name: "Formal Shirts For Men",
    category: "Men's Clothing",
    price: "₹1189",
  },
  {
    image: "https://image.hm.com/assets/hm/2c/57/2c5777c9c5a41214d5c168c4348e2ec4f7f678eb.jpg?imwidth=2160",
    name: "Formal Trousers For Men",
    category: "Men's Clothing",
    price: "₹1100",
  },
  {
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30kgH5pBauzeG5jwGTQCFYg4EnEfk1xUKCQ&s`,
    name: "Formal Trousers For Men",
    category: "Men's Clothing",
    price: "₹908",
  },

  {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLVHDwLOYMXHX8-EwKdNKehZFYW72J5bu9A&s",

    name: "White T-Shirt",
    category: "Men's Clothing",
    price: "₹900",
  },
  {
    image: "https://surhi.in/cdn/shop/files/DSC00241_9efc85a1-66c6-422c-849b-3b050e34d0b8_533x.jpg?v=1720431410",
    name: "Blue Jeans",
    category: "Men's Clothing",
    price: "₹870",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmZx4MvIqrP6czw9uREPBUA19yuIyigeAXw&s",
    name: "Formal Shirts For Men",
    category: "Men's Classic White T-Shirt",
    price: "₹870",
  },
];

const TopProductList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full">
      <div className="flex flex-row justify-between text-start">
        <h1 className="text-lg font-bold mb-2">Top Product</h1>
        <EllipsisVertical />
      </div>

      <p className="pb-3">Top Products This Month</p>
      <ul className="space-y-2">
        {products.map((product, i) => (
          <li key={i} className="flex flex-wrap items-center justify-between gap-2 pb-1">
            <img src={product.image} alt="image" height={45} width={45} className="rounded object-cover"/>
            <div className="flex flex-col flex-1 min-w-[120px]">
              <span className="font-bold truncate">{product.name}</span>
              <span className="text-sm truncate">{product.category}</span>
            </div>
            <span className="font-bold">{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopProductList;
