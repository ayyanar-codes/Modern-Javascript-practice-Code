
//import { fnSay, fnBye } from "./Dynamic-module.js";

let { fnSay, fnBye }=await import("./Dynamic-module.js")

fnSay();

fnBye();

