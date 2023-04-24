import { Coordinate } from './Coordinate';
import * as G from './Group';
import { Animals, Horses, Pigs } from './Animals';

const newPoint: Coordinate = new Coordinate(23, 34);

const newGroup = new G.default(1, 'test');
console.log(G.FirstGroup)

console.log(newPoint, newGroup);

console.log(Animals, Horses, Pigs);