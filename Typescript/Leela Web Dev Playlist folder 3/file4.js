"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
var School = /** @class */ (function () {
    function School() {
        this.description = "School started few years ago";
        this.title = "Primary School";
    }
    School.prototype.showDisplay = function () {
        console.log("output from show display method");
    };
    return School;
}());
exports.School = School;
