
function myFunction() {
    var str = "a9%$k12p3kIkm4&?01q8%N?";
    var num = /[0-9]/g; 
    var let = /[a-z,A-Z]/g; 
    var resultnum = str.match(num);
    var resultlet = str.match(let);

    console.log(resultnum);
    console.log(resultlet);
}

myFunction()