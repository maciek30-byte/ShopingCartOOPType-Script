import IShopingCart from "../Interfaces/IShopingCart";
import CartItem from "./CartItem";
import { v4 as uuidv4 } from "uuid";
import Validator from "./Validator";

class ShopingCart implements IShopingCart {
  id: string;
  basket: CartItem[];
  basketDiscount: number;
  discountCode: number;

  constructor(basketDiscount: number, discountCode: number) {
    Validator.isLessThenZero(basketDiscount);
    Validator.isLessThenZero(discountCode);
    this.id = uuidv4();
    this.basket = [];
    this.basketDiscount = 0;
    this.discountCode = 0;
  }

  addToBasket(item: CartItem, quantity: number): void | never {
    Validator.checkThatExist(CartItem, this.basket);
    this.basket.push(item);
    this.basket.concat(Array(quantity).fill(item));
  }

  removeFromBasket(item: CartItem, quantity: number) {
    Validator.isArrayEmpty(this.basket);
    Validator.checkThatExist(item, this.basket);
    const filtredList = this.basket.filter(
      (cartItem) => cartItem.product.name === item.product.name
    );
    this.basket.concat(this.basket.slice(0, quantity));
  }

  calculateBasket(): number {
    const totalDiscount: number = this.basketDiscount + this.discountCode;
    const finalPrice: number = this.basket.reduce((acc, item) => {
      return (acc += item.product.calculateProductValue());
    }, 0);

    return finalPrice;
  }
}
export default ShopingCart;
