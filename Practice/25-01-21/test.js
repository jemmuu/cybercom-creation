// ts to javascript practice
var testClass = /** @class */ (function () {
    function testClass(name, age, username) {
        var _this = this;
        this.funA = function () {
            console.log("name is " + _this.name + "and age is " + _this.age);
        };
        this.username = username;
        this.name = name;
        this.age = age;
    }
    return testClass;
}());
var test;
(function (test) {
    test[test["jemish"] = 1] = "jemish";
    test[test["kakadiya"] = 2] = "kakadiya";
    test[test["rameshbhai"] = 3] = "rameshbhai";
})(test || (test = {}));
var b = new testClass('jemish', 22, '25967');
var jemish = test.jemish;
console.log(jemish);
console.log(b.name);
b.funA();
