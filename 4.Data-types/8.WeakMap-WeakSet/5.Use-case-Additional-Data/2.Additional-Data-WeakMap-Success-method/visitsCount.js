



let visitCountMap=new WeakMap();


//increase the visitor count
function countUser(user){
    let count=visitCountMap.get(user)||0;
    visitCountMap.set(user, count+1)
}

function getValue(user){
    return visitCountMap.get(user)||0;
}
