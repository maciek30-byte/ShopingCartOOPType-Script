import ICartItem from "../Interfaces/ICartItem";
import { v4 as uuidv4 } from "uuid";
import { ChangeInCartItem } from "../Interfaces/allTypes";


// cartitem = product + qty
class CartItem implements ICartItem {
  id: string;
  name:string;
  category:string
  price:number
  discount:number
  quantity:number
  constructor(id:string,name:string,category:string,price:number,discount:number,quantity:number) {
   //@ToDo add Validator !!!!!!!!!
    this.id = uuidv4();
    this.name = name;
    this.category = category;
    this.price = price;
    this.discount = discount;
    this.quantity = quantity
  }

  setPrice(newPrice: number) {
    if (newPrice <= 0) throw new Error("That is for free or worse.....");
    this.price = newPrice;
  }
  setDiscount(newDiscount: number) {
    if (newDiscount < 0) throw new Error(" that is not a discount ;) ");
    this.discount = newDiscount;
  }
  setNameOfProperty(
    valueToChange: ChangeInCartItem,
    newValue: string | number
  ): void {
    Object.assign(this, { [valueToChange]: newValue });
  }
  calculateTotalValue(): number {
    const discountsValue = (this.price * this.discount) / 100;
    console.log(
      `Product cost after discounts is ${discountsValue + this.price}`
    );
    return discountsValue + this.price;
  }
}

export default CartItem;
