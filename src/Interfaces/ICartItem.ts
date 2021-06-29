import {ChangeInCartItem} from "./allTypes";
interface ICartItem {
  getId(): string;
  name: string;
  category: string; // osobna klasa??
  price: number;
  discount: number;
  quantity: number;

  setPrice(newPrice: number): void;
  setDiscount(newDiscount: number): void;
  setNameOfProperty(valueToChange:ChangeInCartItem , newValue: string): void;
  calculateTotalValue():number

}

export default ICartItem;
