import State from './state'
import Shelter from './shelter'
class Background {
  private _state: State
  private _shelter: Shelter
  constructor(state: State, shelter: Shelter) {
    this._state = state
    this._shelter = shelter
  }
  public static async Initialize(): Promise<Background> {
    const state = await State.Initialize()
    const shelter = await Shelter.Initialize()
    return new this(state, shelter)
  }
}
    // @ts-ignore
window.background = Background.Initialize()
