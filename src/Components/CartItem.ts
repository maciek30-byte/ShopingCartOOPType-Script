import ICartItem from "../Interfaces/ICartItem";
import IProduct from "../Interfaces/IProduct";
import Validator from "./Validator";
import { v4 as uuidv4 } from "uuid";
import Product from "./Product";

class CartItem implements ICartItem {
  id:string
  product : IProduct
  quantity: number

  constructor(quantity:number, product: IProduct) {
    Validator.isLessThenZero(quantity);
    this.id = uuidv4()
    this.product = product
    this.quantity = 0
  }

  changeQuantity(newQuantity: number) {
    this.quantity = newQuantity
  }
}
export default CartItem