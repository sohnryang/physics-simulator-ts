import { Box } from './box'
import { Point } from './point'

const box = new Box(new Point(0, 0), new Point(5, 5));

console.log(`minPoint: (${box.minPoint.x}, ${box.minPoint.y})`);
console.log(`maxPoint: (${box.maxPoint.x}, ${box.maxPoint.y})`);
