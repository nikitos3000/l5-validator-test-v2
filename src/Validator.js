import ValidateArr from "./ArraySchema.js";
import ValidateString from "./StringSchema.js";
class Validator{
    string(){
       return new ValidateString
    }
    array(){
        return new ValidateArr
    }
}
const v = new Validator();

const schema1 = v.string();
schema1.isValid('hexlet'); // true;



const schema2 = v.string().length(5)
console.log(schema2.isValid('hexlet')) // false;
console.log(schema2.isValid(' hello?')) // false;
console.log(schema2.isValid('Hieee')) // true;
console.log(schema2.isValid('!Hide')) // false;



export default Validator
