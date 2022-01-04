import {ArmorProps} from "../interfaces";

export class Armor implements ArmorProps {
    armor: number;
    durability: number;
    name: string;
    price: number;

    public constructor(props: ArmorProps) {
        this.armor = props.armor;
        this.durability = props.durability;
        this.name = props.name;
        this.price = props.price;
    }



    public getArmor(): number {
        return this.armor;
    }

    public setArmor(armor: number) {
        this.armor = armor;
    }
    public getDurability(): number {
        return this.durability;
    }

    public setDurability(durability: number) {
        this.durability = durability;
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

    toString(): string {
        const fields: string[] = [];
        fields.push(`name: ${this.name}`);
        fields.push(`armor: ${this.armor}`);
        fields.push(`durability: ${this.durability}`);
        fields.push(`price: ${this.price}`);
        return "{" + fields.join(", ") + "}";
    }

}