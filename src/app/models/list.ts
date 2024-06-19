import { CardModel } from "./card";

export interface ListModel{
  id?: number;
  nombre: string;
  //color: string;
  listCard?: CardModel[];

}
