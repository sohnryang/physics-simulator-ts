/*
 * circle.ts -- a circle
 */

import { Point } from './point';

export class Circle {
    public position: Point;
    public radius: number;

    constructor(position: Point, radius: number) {
        this.position = position;
        this.radius = radius;
    }
}
