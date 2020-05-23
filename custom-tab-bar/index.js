const app = getApp()

Component({
  data: {
    selectedId: 1,
    identityIndex: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      id: 1,
      pagePath: "/index/index",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "首页",
      identity: [0,1,2],
      show: true
    }, {
      id: 2,
      pagePath: "/index/index",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "创意设计",
      identity: [0,1,2],
      show: true
    }, {
      id: 3,
      pagePath: "/index/index",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "商城",
      identity: [0,1,2],
      show: true
    }, {
      id: 4,
      pagePath: "/index/index",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "制造进度",
      identity: [2],
      show: false
    }, {
      id: 5,
      pagePath: "/index/index2",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "我",
      identity: [0,1,2],
      show: true
    }]
  },
  attached() { 
    this.setData({selectedId: app.globalData.selectedId})
    this.setData({identityIndex: app.globalData.identityIndex})
    this.check()
  },
  show(){
    this.check()
  },
  methods: {
    check(){
      const {list,identityIndex} = this.data
      for (let i = 0; i < list.length; i++) {
        if(!list[i].identity.includes(identityIndex)){          
          list[i].show = false
        } else{
          list[i].show = true
        }
      }
      this.setData({list})
      console.log(identityIndex,list)
    },
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      const id = data.id
      app.globalData.selectedId = id
      this.setData({selectedId: id})
      this.check()
      wx.switchTab({url}) 
    }
  }
})