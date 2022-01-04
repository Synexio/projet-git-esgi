import {CharacterProps} from "../interfaces/character.interface";
import {WeaponsProps} from "../interfaces/weapons.interfaces";
import {Armor} from "./armor.class";

export class Character implements CharacterProps {
    health: number;
    hitChance: number;
    name: string;
    isZombie: boolean;
    weapon: WeaponsProps;
    armor: Armor;


    public constructor(props: CharacterProps) {
        this.health = props.health;
        this.name = props.name;
        this.hitChance = props.hitChance;
        this.weapon = props.weapon;
        this.armor = props.armor;
        this.isZombie = props.isZombie;
    }

    protect(valeurAttaque: number): number {
        this.armor.setDurability(this.armor.getDurability()-1);
        if(this.armor.durability === 0) console.log(this.getName() + "'s armor broke !");
        if(this.armor.durability <= 0) {
            this.armor.setDurability(0);
            return valeurAttaque*30/100;
        }
        if(this.armor.getArmor() >= 30) return 1;
        return valeurAttaque*(30-this.armor.getArmor())/100;
    }

    attack(char: Character): void {
        let rand = Math.floor(Math.random() * 101);
        if(rand>this.hitChance){
            let dmg: number = Number(char.protect(Number(this.weapon.damage()) + Number(this.weapon.damage()) * 13 / 100));
            char.setHealth(Number(Number(Number(char.getHealth()) - Number(char.protect(Number(this.weapon.damage()) + Number(this.weapon.damage()) * 13 / 100))).toFixed(2)));
            console.log(this.getName() + " hits " + char.getName() + " for " + dmg + " damage !");
        }
        if(char.getHealth()<0){
            console.log(char.getName() + " is dead !");
            char.setHealth(0);
            char.isZombi();
        }
    }
    fight(char: Character): Character | undefined {
        while(this.health > 0 && char.health>0){
            if(this.getHealth()>0) this.attack(char);
            if(char.getHealth()>0) char.attack(this);
        }
        if(this.health <= 0 && char.health <= 0) return undefined;
        if(this.health <= 0) return char;
        if(char.health <= 0) return this;
    }

    isZombi(): void{
        let rand = Math.floor(Math.random() * 101);
        if (rand<=101 && this.isZombie === false){
            console.log("But " + this.getName() + " revives as a zombie ! The fight goes on !");
            this.setHealth(5000);
            this.armor.setArmor(-70);
            this.armor.setDurability(10000);
            this.setIsZombie(true);
        }
    }
    public getHealth(): number {
        return this.health;
    }

    public setHealth(health: number) {
        this.health = health;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getHitChance(): number {
        return this.hitChance;
    }

    public setHitChance(hitChance: number) {
        this.hitChance = hitChance;
    }
    public getIsZombie(): boolean {
        return this.isZombie;
    }

    public setIsZombie(isZombie: boolean) {
        this.isZombie = isZombie;
    }

    toString(): string {
        const fields: string[] = [];
        fields.push(`name: ${this.name}`);
        fields.push(`health: ${this.health}`);
        fields.push(`hitChance: ${this.hitChance}`);
        fields.push(`weapon: ${this.weapon}`);
        fields.push(`armor: ${this.armor}`);
        fields.push(`isZombie: ${this.isZombie}`);
        return "{" + fields.join(", ") + "}";
    }
}