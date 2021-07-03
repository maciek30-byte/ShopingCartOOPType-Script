import {ChangeInCartItem} from "./allTypes";
interface ICartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  discount: number;
  quantity: number;

  setPrice(newPrice: number): void;
  setDiscount(newDiscount: number): void;
  setNameOfProperty(valueToChange:ChangeInCartItem , newValue: string|number): void;
  calculateTotalValue():number

}

export default ICartItem;
