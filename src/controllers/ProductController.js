import Product from '../models/Product';
import gamerImg from '../assets/images/gamer.png';
import macImg from '../assets/images/mac.png';

const products = [
  new Product(
    1,
    "Laptop Gamer Xtreme",
    19999,
    "Laptop para gaming con RGB",
    gamerImg,
    { ram: "32GB", cpu: "AMD Ryzen 9", storage: "1TB SSD" },
    [3, 6, 12]
  ),
  new Product(
    2,
    "MacBook Pro",
    24999,
    "Ideal para desarrolladores",
    macImg,
    { ram: "16GB", cpu: "Apple M2", storage: "512GB SSD" },
    [6, 12]
  )
];

export const getProducts = () => {
  return products;
};
