let cach=new Map();
let num=0;

function process(obj){
    if(!cach.has(obj)){
        let result=num+1;
        cach.set(obj, result);
        return cach.get(obj);
    } else{
       return cach.get(obj);
    }
}


function clearCach(obj){
    obj=null;
    return cach.get(obj) ||null;
}