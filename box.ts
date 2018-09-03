/*
 * box.ts -- a box
 */

import { Point } from './point';

export class Box {
    public minPoint: Point;
    public maxPoint: Point;

    constructor(minPoint: Point, maxPoint: Point) {
        this.minPoint = minPoint;
        this.maxPoint = maxPoint;
    }
}