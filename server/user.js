module.exports = {
  name: string = "",
  print: function() {
    console.log(this.name);
  },
  sayHello: function(n) {
    console.log("Hello " + n);
  },
  callbackfun: function(x, y) {
    x = x + 10;
    y(x);
  }
};
