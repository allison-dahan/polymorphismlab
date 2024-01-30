import { ISortable } from "./isortable";

export class CharacterGroup implements ISortable{
    data: string;
    get length(): number { };
    swap(leftPos: number, rightPos: number):void {  };
     compare(leftPos: number, rightPos: number): boolean { };
}