import Breed from '../background/breed'
import { Moods } from '../background/enums'
import { Views } from './enums'

export class DeserializedState {
  public view: Views
  public _cats: DeserializedCat[]
  constructor() {
    this.view = null
    this._cats = null
  }
}

export interface DeserializedCat {
  _name: string;
  _breed: Breed;
  _age: number;
  _mood: Moods;
}
