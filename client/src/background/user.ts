import { Browser } from '../common'

export interface UserProfile {
  email: string,
  id: string,
}

export default class User {
  private _profile: UserProfile
  constructor(profile: UserProfile) {
    this._profile = profile
  }
  get profile(): UserProfile {
    return this._profile
  }
  static async Initialize(): Promise<User>{
    const profile = await Browser.Identity.GetProfileUserInfo()
    return new this(profile)
  }
}
