export default {
  pages: [
    'pages/index/index',
  ],
  // 这里分包字段如果需要在百度subPackages编译，要是用驼峰命名
  subPackages: [{
    root: 'pages/packageA/',
    pages: [
      'apple/index',
    ]
  }, {
    root: 'pages/packageB/',
    pages: [
      'cat/index',
    ]
  }],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
