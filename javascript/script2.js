import n from "./script1.js"; //can use any variable for export default
import {greet} from "./script1.js";

console.log(n);
console.log(greet());
let message = greet();
console.log(message);