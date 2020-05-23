const app = getApp()

Component({
  pageLifetimes: {
    show() { 
      // 所有tabbar的show里面都要加这个
      this.getTabBar().setData({
        identityIndex:app.globalData.identityIndex,
        selectedId: app.globalData.selectedId
      })
      this.getTabBar().check()
    }
  }
})
