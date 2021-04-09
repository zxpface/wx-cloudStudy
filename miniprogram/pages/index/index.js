// 连接云
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj:""
  },
  //查询数据
  getDaata(){
    // 连接domelist数据，获取
    db.collection('domelist').get().then(res=>{      
        this.setData({
          dataObj:res.data
        })
     
    }).catch(err=>{

    })
    // where 与 doc 区别
  //   db.collection('domelist').where({
  //     author:'盛广耀'
  //   }).get().then(res=>{  
  //     console.log(
  //       res
  //     );    
  //     this.setData({
  //       dataObj:res.data
  //     })
   
  // }).catch(err=>{

  // })
 
  },
// 添加数据
  addData(){
    wx.showLoading({
      title: '数据加载。。。',
      mask:true
    })
db.collection('domelist').add({
      data:{
        title:"测试标题1",
        author:'张思',
        content:'测试内容1'
      }
    }).then(res=>{
      console.log(res);
      wx.hideLoading()
    })
      },

  btnSub(res){
      console.log(res);
    // let title=res.detail.value.title;
    // let author=res.detail.value.author;
    // let content=res.detail.value.content;
//第二种方法 解构赋值
    // var {title,author,content}=res.detail.value
    // console.log(title,author,content);
    // db.collection("domelist").add({
    //   data:{
    //     title,author,content
    //   }
    // }).then(res=>{
    //   console.log(res);
    // })

    //第三种 对象与name相同
    let resValue=res.detail.value;
    db.collection("domelist").add({
      data:resValue
    }).then(res=>{
      console.log(res);
    })
  },

// 更新数据













  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})