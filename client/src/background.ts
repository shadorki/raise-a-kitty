console.log('meow!!!')
chrome.runtime.onInstalled.addListener((): void => {
  chrome.identity.getProfileUserInfo(console.log)
})
