import ICart from "../Interfaces/ICart";
import CartItem from "./CartItem";
import { v4 as uuidv4 } from "uuid";
import Validator from "./Validator";

class Cart implements ICart {
  id: string;
  basket: CartItem[];

  constructor(public basketDiscount: number, public discountCode: number) {
    this.id = uuidv4();
    this.basket = [];
  }

  getId(): string {
    return this.id;
  }

  addToBasket(...items: CartItem[]) {
    if (items.length === 0) throw new Error("you have to add something");
    items.forEach((item) => {
      if (Validator.checkThatExist(item, this.basket)) {
        throw new Error(
          " element is existing on a list use THESAMEONALISTFUNCTION "
        );
      } else {
        this.basket.push(item);
      }
    });
  }

  deleteFromBasket(...items: CartItem[]): void {
    if (items.length === 0) throw new Error("you have to add something");
    items.forEach((item) => {
      if (!Validator.checkThatExist(item, this.basket)) {
        throw new Error("you could not delete element that not exist");
      } else {
        this.basket = this.basket.filter((element) => {
          return element.getId() !== item.getId();
        });
      }
    });
  }

  calculateBasket(): number {
    const totalDiscount: number = this.basketDiscount + this.discountCode;
    const arrayToCalculate: number[] = [];
    this.basket.forEach((item) => {
      arrayToCalculate.push(item.calculateTotalValue());
    });

    const finalPrice: number = arrayToCalculate.reduce((acc, currElement) => {
      return (acc += currElement);
    });
    return finalPrice;
  }
}
