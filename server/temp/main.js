var user = require("./user");

user.name = "cucu";
user.print();
user.sayHello("xuxu");
user.callbackfun(10, (x) => {console.log(x)});
