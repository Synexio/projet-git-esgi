export interface WeaponsProps {
    name: string;
    height: number;
    width: number;
    weight: number; //grammes
    price: number;

    duration():number;
    damage():number;
    bonus():number;


}