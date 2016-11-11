import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Echarts from 'native-echarts'


class SampleChart extends Component {

  render() {
    const option = {
      title: {
        text: 'Demo'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
    return (
      <View style={styles.container} >
        <Text style={{marginBottom: 15}} >Echarts Demo</Text>
        <Echarts option={option} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 4,
    paddingRight: 4
  }
})

export default SampleChart