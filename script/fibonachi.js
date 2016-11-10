//           1 No Fibonachi


// var n = Number(prompt('Input "n" for: fibonachi'));
// var i = 0;
// var m = n+1;
// document.write(n +'<br>');
// while (i <=10) {
//     var s = n + m;
//     n=m;
//     document.write(n +'<br>');
//     m=s;
// i++;    
// }


//                 2 func Fibonachi
 
var n = Number(prompt('Input "n" for: fibonachi'));
function fibonachi(n) {
    if (n < 3) {
        if (n == 0) {
            return 0;
        }
        return 1;
    }
    else {
        return fibonachi(n - 1) + fibonachi(n - 2);
    }
}
for (n; n < 20; n++) {
    document.write('n = ' + fibonachi(n) + '<br>');
}






