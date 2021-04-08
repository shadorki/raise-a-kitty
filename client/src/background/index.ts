import User from './user'

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
