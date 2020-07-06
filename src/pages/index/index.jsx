import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtList, AtListItem } from 'taro-ui'
import { connect } from 'react-redux';
import styles from './index.scss';

@connect(({ index }) => {
  const { gameList = [], page = 1 } = index;
  return {
    gameList,
    page,
  };
})

export default class Index extends Component {
  getGameList = async (page) => {
    await this.props.dispatch({
      type: 'index/getGameList',
      payload: {
        type: 'recent',
        page,
      },
    })
  }
  componentWillMount () {
    this.getGameList(this.props.page);
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 下拉刷新
  onPullDownRefresh () {
    this.props.dispatch({
      type: 'index/updateState',
      payload: {
        gameList: [],
      }
    })
    this.getGameList(1);
  }
  // 上拉加载更多
  async onReachBottom () {
    Taro.showLoading({ title: '加载中...' });
    const tempPage = this.props.page + 1;
    await this.getGameList(tempPage);
    Taro.hideLoading();
  }

  handleNavigate = () => {
    Taro.navigateTo({
      url: '/pages/test/index'
    });
  }
  renderGameList = () => {
    return this.props.gameList.map((item, index) => {
      return (
        <AtListItem
          key={index}
          thumb={item.cover_image}
          title={item.name}
          note={`${item.language_support}/${item.genres[0]}/${item.game.post_num}条讨论`}
        />
      )
    })
  }
  render () {
    return (
      <View className={styles.index}>
        {/* <AtButton type="primary" onClick={this.handleNavigate}>跳转测试页面</AtButton> */}
        <AtList>{this.renderGameList()}</AtList>
      </View>
    )
  }
}
