import {WeaponsProps} from "../interfaces/weapons.interfaces";

export class Gun implements WeaponsProps {
     height: number;
     name: string;
     price: number;
     weight: number;
     width: number;
     bullets: number;


    constructor(props: { price: number; name: string; width: number; weight: number; height: number }, bullets: number) {
        this.height = props.height;
        this.name = props.name;
        this.price = props.price;
        this.weight = props.weight;
        this.width = props.width;
        this.bullets = bullets;
    }


    bonus(): number {
        if(this.weight % this.bullets !== 0 && this.bullets !== 0){
            return this.bullets * this.weight / (this.weight % this.bullets);
        } else { return 0; }
    }

    damage(): number {
        if (this.height !== 0 && this.width !== 0){
            return this.weight / (this.height * this.width) + this.bonus();
        }else { return 0; }
    }

    duration(): number {
        if (this.weight !==0){
            return this.price / this.weight * this.damage();
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

    public getBullets(): number {
        return this.bullets;
    }

    public setBullets(bullets: number) {
        this.bullets = bullets;
    }

    toString(): string {
        const fields: string[] = [];
        fields.push(`name: ${this.name}`);
        fields.push(`height: ${this.height}`);
        fields.push(`weight: ${this.weight}`);
        fields.push(`width: ${this.width}`);
        fields.push(`price: ${this.price}`);
        fields.push(`bullets: ${this.bullets}`);
        return "{" + fields.join(", ") + "}";
    }

}