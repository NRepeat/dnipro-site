import { FullProduct } from "@/app/services/products";
import { PayloadAction, createSlice, original } from "@reduxjs/toolkit";

type CartItem ={
  id:number,
  quantity:number,
  name:string,
  imageUrl:string,
  price:number
}
type CreateCatItem ={}

export type BagStateType = {
loading:boolean
error:boolean,
totalAmount:number,
items:CartItem[],
fetchCartItems:()=> Promise<void>
updateItemQuantity:(id:number,quantity:number) => Promise<void>;
addCartItem:(values:CreateCatItemValues) =>  Promise<void>
removeCartItem:(id:number) => Promise<void>
};
const initialState: BagStateType = {
addCartItem: ()=> void,
error:false,
items:[],
loading:false,
totalAmount:0,


};

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {},
});

export const {} = bagSlice.actions;

export default bagSlice.reducer;
