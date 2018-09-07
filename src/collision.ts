/*
 * collision.ts -- collision detection
 */

import { Box } from './box';
import { Circle } from './circle';
import { Point } from './point';

export function boxVsBox(box1: Box, box2: Box) {
    if (box1.maxPoint.x < box2.maxPoint.x ||
        box1.minPoint.x > box2.minPoint.x)
        return false;
    if (box1.maxPoint.y < box2.maxPoint.y ||
        box1.minPoint.y > box2.minPoint.y)
        return false;
    return true;
}

export function circleVsCircle(circle1: Circle, circle2: Circle) {
    const squaredRadius = (circle1.radius + circle2.radius) ** 2;
    return squaredRadius < (circle1.position.x + circle2.position.x) ** 2 +
           (circle1.position.y + circle2.position.y) ** 2;
}