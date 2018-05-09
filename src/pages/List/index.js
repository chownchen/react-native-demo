/**
 * zdchen created in 2018/4/11
 */

import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux'
import store from '../../store'

import ListItem from './../../component/ListItem'
import Camera from 'react-native-camera'
import RNFS from 'react-native-fs'
import $$ from '../../common/Tools'
import 'whatwg-fetch';
import { captureScreen } from "react-native-view-shot";

class List extends Component {

  static navigationOptions = {
    title: '列表页',
  }

  constructor(props) {
    super(props)
  }

  componentDidMount(){

    const defaultState = []

    for(let i = 0;i < 20; i++){
      defaultState.push(
        { img: `http://pic118.nipic.com/pic/20161221/15114570_141250313033_4.jpg`,
          title: `第${i + i + i + i + i}条标题`,
          content: `我是第${i + i + i + i + i}条内容，我是第${i + i + i + i + i}条内容，
              我是第${i + i + i + i + i}条内容，我是第${i + i + i + i + i}条内容，
              我是第${i + i + i + i + i}条内容，我是第${i + i + i + i + i}条内容，
              我是第${i + i + i + i + i}条内容，我是第${i + i + i + i + i}条内容，
              我是第${i + i + i + i + i}条内容，我是第${i + i + i + i + i}条内容，
              我是第${i + i + i + i + i}条内容。`
        }
      )
    }

    store.dispatch({
      type: 'QUERY',
      info: {list: defaultState}
    })
  }

  render() {
    return (
        <View>
          <FlatList
            data={this.props.list}
            renderItem={({item, index}) => (
              <ListItem item={item} index={index} navigation={this.props.navigation}></ListItem>
            )}
          />
        </View>
    )
  }


}

let mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

export default connect( mapStateToProps )(List)