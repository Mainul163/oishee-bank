
//  ekta function er moddhe r ekta function call kora

// function first(name,age,task){
//     console.log(name);
//     console.log(age);
//      second();
// }
// function second(){
//     console.log("my name is khan");
// }

// first("mainul",12);




// pass function as a perametter
function first(name,age,task){
        console.log(name);
        console.log(age);
        task();
    }
    function second(){
            console.log("my name is khan");
        }

        function third(){
            console.log("my name is rahaman");
        }
        first("mainul",12, second);
        first("shujon",13,third);