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
  },
  data: {
    identity: ["设计师","创想家","制造商"],
    identityIndex: 0
  },
  methods: {
    change(){
      const {identityIndex,identity} = this.data
      const identityIndexNew = identityIndex+1>identity.length-1 ? 0 :identityIndex+1
      this.getTabBar().setData({identityIndex: identityIndexNew})
      this.getTabBar().check()
      this.setData({identityIndex: identityIndexNew})
      app.globalData.identityIndex = identityIndexNew
    }
  }
})
