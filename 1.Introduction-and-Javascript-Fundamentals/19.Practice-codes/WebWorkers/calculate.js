function calculate(){

    let output=0;

    for(let i=0; i<=4000000000; i++){
        output=i;
        if(i%20000000===0){
            console.log(i+'iteration over');
        }
    }

    alert('output is '+ output);
}