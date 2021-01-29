function add(){

    var sum=0;
    for(i=0;i<arguments.length;i++){
        var element=arguments[i];
        var sum=sum+element;
    }
    return sum;
}

var result=add(12,45,68);
console.log(result);