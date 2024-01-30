import { ISortable } from "./isortable";

export class CharacterGroup implements ISortable{
    data: string;

    constructor(data: string){
        this.data = data;
    }

    get length(): number {
        return this.data.length;
    }
    swap(leftPos: number, rightPos: number): void {
        const stringArray = this.data.split("");
        let tempLeft = stringArray[leftPos];
        stringArray[leftPos] = stringArray[rightPos];
        stringArray[rightPos] = tempLeft;
        this.data = stringArray.join("");

    }
    // ademi
    compare(leftPos: number, rightPos: number): boolean {
        return this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase();
    }

}