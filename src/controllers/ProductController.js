import Product from '../models/Product';
import gamerImg from '../assets/images/gamer.png'
import macImg from '../assets/images/mac.png'

const products = [
  //test with two object to maybe later add another objects
  new Product(
    1,
    "Laptop Gamer Xtreme",
    19999,
    "Laptop para gaming con RGB",
    gamerImg,
    "laptop-gamer.jpg",
    { ram: "32GB", cpu: "AMD Ryzen 9", storage: "1TB SSD" },
    [6, 12]
  ),
  new Product(
    2,
    "MacBook Pro",
    24999,
    "Ideal para desarrolladores",
    macImg,
    "macbook-pro.jpg",
    { ram: "16GB", cpu: "Apple M2", storage: "512GB SSD" },
    [6, 12]
  ),

];

export const getProducts = () => {
  return products;
};

