import CartItem from "../Components/CartItem";

interface IShopingCart {
    id:string;
    basket: CartItem[];
    basketDiscount:number;
    discountCode:number

    addToBasket(cartItem: CartItem, quantity:number):void| never;
    removeFromBasket(item:CartItem,quantity:number):void | never;
    calculateBasket():number


}
export default IShopingCart