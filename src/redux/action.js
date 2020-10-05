import { DEFAULT_ACTION } from "./actionType";

export const defaults = (data) => {
   return{
        type : DEFAULT_ACTION,
        payload : data
   }
}