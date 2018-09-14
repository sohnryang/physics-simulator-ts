import { Circle } from './circle';
import { Point } from './point'

let circle = new Circle(new Point(0, 0), 1);
let canvasElem = <HTMLCanvasElement>document.getElementById('mainCanvas');
let context = canvasElem.getContext('2d');
context.beginPath();
context.arc(circle.position.x + 10, circle.position.y,
            circle.radius * 50, 0, 2 * Math.PI);
context.stroke();
