import State from './state'
import Shelter from './shelter'
class Background {
  private _state: State
  private _shelter: Shelter
  constructor() {
    this._state = new State()
    this._shelter = null
  }
  async initialize(): Promise<void> {
    this._shelter = await Shelter.initialize()
  }
}

const background = new Background()

background.initialize()
