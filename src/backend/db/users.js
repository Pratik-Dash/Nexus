import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    profileImage:'https://th.bing.com/th/id/OIG.S_OEBZrr8dzgPLJNFcjj?pid=ImgGn',
    password: "adarshbalika",
    addresses:{userAddress:{
      street:"987 Pine Lane",
      city:"Florence",
      state:"Alabama",
      country:"United States"
      
    }},
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
