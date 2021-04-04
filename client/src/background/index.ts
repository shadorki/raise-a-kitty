import User from './user'
import { Api } from '../common'

class Background {
  public user: User
  constructor() {
    this.user = null
  }
  async initialize(): Promise<void> {
    this.user = await User.Initialize()
    await Api.Authenticate(this.user.profile)
  }
}

const background = new Background()

background.initialize()
