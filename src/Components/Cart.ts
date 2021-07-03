import ICart from "../Interfaces/ICart";
import CartItem from "./CartItem";
import { v4 as uuidv4 } from "uuid";
import Validator from "./Validator";

class Cart implements ICart {
  _id: string;
  basket: CartItem[];

  constructor(public basketDiscount: number, public discountCode: number) {
    this._id = uuidv4();
    this.basket = [];
  }

  get id() {
    return this._id;
  }

  addToBasket(...items: CartItem[]): void | never {
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

  deleteFromBasket(...items: CartItem[]): void | never {
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
    // const arrayToCalculate: number[] = [];
    // this.basket.forEach((item) => {
    //   arrayToCalculate.push(item.calculateTotalValue());
    // });

    const finalPrice: number = this.basket.reduce((acc, item) => {
      return (acc += item.calculateTotalValue());
    }, 0);
    return finalPrice;
  }
  addTheSameItemToBasket(item: CartItem, repeat: number): CartItem[] {
    return this.basket.concat(Array(repeat).fill(item));
  }
  deleteTheSameFromBasket(item: CartItem, repeat: number): CartItem[] {
    const filteredList = this.basket.filter(
      (itemB) => itemB.name === item.name
    );
    return this.basket.concat(filteredList.slice(0, repeat));
  }

  // brak metody do zmiany ilości
}
