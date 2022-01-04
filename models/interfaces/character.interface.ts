import {WeaponsProps} from "./weapons.interfaces";
import {Armor} from "../classes";

export interface CharacterProps {
    name: string;
    health: number;
    hitChance: number;
    isZombie: boolean;
    weapon: WeaponsProps;
    armor: Armor;
}