import IProduct from "./IProduct";

interface ICartItem {
 product:IProduct
  quantity:number

  changeQuantity(newQuantity:number): void | never
}

export default ICartItem;
