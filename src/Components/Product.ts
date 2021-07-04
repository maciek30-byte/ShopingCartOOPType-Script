import Validator from "./Validator";
import { v4 as uuidv4 } from "uuid";
import {ChangeInProduct} from "../Interfaces/allTypes";
import IProduct from "../Interfaces/IProduct";

class Product implements IProduct{
  id: string;
  name: string;
  category: string;
  price: number;
  discount: number;

  constructor(name: string, category: string, price: number, discount: number) {
    Validator.nameValidation(name);
    Validator.isEmptyString(category);
    Validator.isLessThenZero(price);
    Validator.isLessThenZero(discount);
    this.id = uuidv4();
    this.name = name;
    this.category = category;
    this.price = price;
    this.discount = discount;
  }

  setProperties(propertyToChange:ChangeInProduct, newValue: | string | number):void | never{
      (typeof newValue === 'number') ?  Validator.isLessThenZero(newValue) : Validator.nameValidation(propertyToChange)
     Object.assign(this, {[propertyToChange]: newValue})
  }

  calculateProductValue(): number {
      const discountValue = (this.price* this.discount) / 100;
      console.log('price after discounts in item is', discountValue + this.price);
      return discountValue + this.price
  }
}
export default Product
