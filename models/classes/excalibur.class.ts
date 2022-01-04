import {Sword} from "./sword.class";
import {WeaponsProps} from "../interfaces/weapons.interfaces";

export class Excalibur extends Sword {

    private static instance: Excalibur;

    public static getInstance(): Excalibur{
        if(Excalibur.instance === undefined){
            Excalibur.instance = new Excalibur();
        }
        return Excalibur.instance;
    }

    private constructor() {
        super({name:"Excalibur", height:300, price:100000, weight:350,width:40},1600,true);
    }
    bonus(): number{
        if(this.getYear()!==0){
            return this.getWeight() / this.getYear();
        }
    }
}