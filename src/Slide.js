"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Slide {
    constructor(container, elements, controls, time = 5000) {
        this.container = container;
        this.elements = elements;
        this.controls = controls;
        this.time = time;
        console.log(this.container);
        console.log(this.elements);
        console.log(this.controls);
        console.log(this.time);
    }
}
exports.default = Slide;
