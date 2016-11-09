function Cat(name) {
   this.name = name;
   this.run = function() {
      document.write('Cat ' + this.name + ' has run <br>');
   };
}

var murchik = new Cat('Murcjik');
var barsik = new Cat('Barsik');

murchik.run();
barsik.run();

// var cats = {
//    Murchik:"red",
//    Ruzik:"black",
//    Pushok:"green"
// }
// document.write(cats["Murchik"]);

// for (var cat in cats) {
//    document.write(cat+ ': ' + cats[cat]+'<br>');
// }