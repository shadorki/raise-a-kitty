import Breed from './breed';
import { Moods } from './enums'

export default class Cat {
  private _name: string;
  private _breed: Breed;
  private _age: number;
  private _mood: Moods
  constructor(breed: Breed) {
    this._name = null
    this._breed = breed
    this._age = null
    this._mood = Moods.CONTENT
  }
  get age(): number {
    return Math.ceil((Date.now() - this._age) / 1000 / 60 / 60);
  }
  adopt(name: string): void {
    this._name = name
    this._age = Date.now()
  }
}
