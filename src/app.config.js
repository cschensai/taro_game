export default {
  pages: [
    'pages/index/index'
  ],
  subpackages: [{
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
