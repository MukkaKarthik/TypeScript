"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Learning_Namespaces;
(function (Learning_Namespaces) {
    var Logs = /** @class */ (function () {
        function Logs() {
            this.Export_consoleLogs();
        }
        Logs.prototype.Export_consoleLogs = function () {
            console.log("Using namespaces so that they are available in other files");
        };
        return Logs;
    }());
    Learning_Namespaces.Logs = Logs;
})(Learning_Namespaces || (Learning_Namespaces = {}));
var Product = /** @class */ (function () {
    function Product(t, d) {
        this.title = t;
        this.description = d;
    }
    Product.prototype.getInformation = function () {
        return [this.title, this.description];
    };
    return Product;
}());
exports.Product = Product;
