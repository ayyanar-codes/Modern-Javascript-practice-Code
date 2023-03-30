
//import { fnSay, fnBye } from "./Dynamic-module.js";

let Obj=await import("./Dynamic-module.js");

let fnSay=Obj.default;

fnSay();

//fnBye();

