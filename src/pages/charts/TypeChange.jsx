import React, { Component } from 'react';
import * as echarts from 'echarts'; // 引入 echarts
import 'echarts/lib/chart/line'; // 引入折线图

class Typechange extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidUpdate() {
    const echartObj = echarts.init(document.getElementsByClassName('typeChange')[0]);
    echartObj.setOption(this.props.options);
  }

  render() {
    return (
      <div
        className = "typeChange"
        style={{
          width: 600,
          height: 600,
        }}>
      </div>
    )
  }
}

export default Typechange;
