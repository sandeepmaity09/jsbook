// console.log('main.js loaded');

$(document).ready(function () {
    'use strict';
    console.log('main.js loaded');

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // TODO


    // console.log(document.getElementById('mainCanvas'));

    // let c = Shape.Circle(200, 200, 50);
    // c.fillColor = 'green';

    // let c;
    // for (let x = 25; x < 400; x += 50) {
    //     for (let y = 25; y < 400; y += 50) {
    //         c = Shape.Circle(x, y, 20);
    //         c.fillColor = 'green';
    //     }
    // }

    var tool = new Tool();
    tool.onMouseDown = function (event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'red';
    }

    
    // console.log(c);
    paper.view.draw();
})