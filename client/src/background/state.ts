import Cat from './cat'

export default class State {
  private _cats: Cat[];
  constructor() {
    this._cats = []
  }
}
