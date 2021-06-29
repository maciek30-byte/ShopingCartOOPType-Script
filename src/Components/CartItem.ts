import ICartItem from "../Interfaces/ICartItem";
import { v4 as uuidv4 } from "uuid";
import { ChangeInCartItem } from "../Interfaces/allTypes";

class CartItem implements ICartItem {
  id: string;
  constructor(
    public name: string,
    public category: string,
    public price: number,
    public discount: number,
    public quantity: number
  ) {
    this.id = uuidv4();
  }
  getId(): string {
    return this.id;
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
