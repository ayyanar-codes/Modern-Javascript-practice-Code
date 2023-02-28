



let visitCountMap=new Map();


//increase the visitor count
function countUser(user){
    let count=visitCountMap.get(user)||0;
    visitCountMap.set(user, count+1)
}

