
import  {isValidUsername} from "6pp"

export const Validator=(username)=>{
    if(!isValidUsername(username))
   return  { isValid: false, errorMessage: "Username is Invalid" }

}