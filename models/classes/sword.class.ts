import {WeaponsProps} from "../interfaces/weapons.interfaces";

export class Sword implements WeaponsProps {
     height: number;
     name: string;
     price: number;
     weight: number;
     width: number;
     year: number;
     readonly legendary: boolean;


    constructor(props: { price: number; name: string; width: number; weight: number; height: number }, year: number, legendary: boolean) {
        this.height = props.height;
        this.name = props.name;
        this.price = props.price;
        this.weight = props.weight;
        this.width = props.width;
        this.year = year;
        this.legendary = legendary;
    }

    bonus(): number {
        if(this.year !== 0 && this.legendary === true){
            return this.weight / this.year;
        }else { return 0; }
    }

    damage(): number {
        if (this.year !== 0){
            let res = (this.weight * this.height * this.width + this.bonus()) / this.year;
            if (this.legendary !== true || this.duration()<10) res = res - res*10/100;
            return res;
        }else { return 0; }
    }

    duration(): number {
        if (this.price !==0){
            return this.weight * this.year / this.price;
        }else { return 0; }
    }


    public getHeight(): number {
        return this.height;
    }

    public setHeight(height: number) {
        this.height = height;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number) {
        this.price = price;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setWeight(weight: number) {
        this.weight = weight;
    }

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number) {
        this.width = width;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number) {
        this.year = year;
    }

    public getLegendary(): boolean {
        return this.legendary;
    }


    toString(): string {
        const fields: string[] = [];
        fields.push(`name: ${this.name}`);
        fields.push(`height: ${this.height}`);
        fields.push(`weight: ${this.weight}`);
        fields.push(`width: ${this.width}`);
        fields.push(`price: ${this.price}`);
        fields.push(`year: ${this.year}`);
        fields.push(`legendary: ${this.legendary}`);
        return "{" + fields.join(", ") + "}";
    }

}