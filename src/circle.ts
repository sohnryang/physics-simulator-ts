/*
 * circle.ts -- a circle
 */

import { Point } from './point';
import { Shape } from './shape';

export class Circle extends Shape {
    public position: Point;
    public radius: number;

    constructor(position: Point, radius: number) {
        super();
        this.position = position;
        this.radius = radius;
    }
}
