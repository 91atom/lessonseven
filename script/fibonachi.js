var n = Number(prompt('Input "n" for: Fibonachi'));
var i = 0;
var m = n+1;
document.write(n +'<br>');
while (i <=10) {
    var s = n + m;
    n=m;
    document.write(n +'<br>');
    m=s;
i++;    
}