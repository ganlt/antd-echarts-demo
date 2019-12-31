import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Row, Col, Select, Card } from 'antd';
import Typechange from './TypeChange';

const { Option } = Select;
const options = {
  title: {
    text: 'ECharts 入门示例',
  },
  legend: {
    data: ['销量'],
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {
    type: 'value',
  },
  series: [{
    name: '销量',
    type: 'line',
    data: [5, 20, 36, 10, 10, 20],
  }],
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options,
    }
  }

  handleChange = value => {
    const opt = JSON.parse(JSON.stringify(options));
    opt.series[0].type = value;
    this.setState({
      options: opt,
    });
  }

  render() {
    return (
      <PageHeaderWrapper>
        <Row>
          <Col span={16}>
            <Card>
              <Typechange options={this.state.options}></Typechange>
            </Card>
          </Col>
          <Col span={8}>
            <Select
              defaultValue="line"
              style={{ width: 120 }}
              onChange={this.handleChange}
            >
              <Option value="line">折线图</Option>
              <Option value="bar">柱状图</Option>
              <Option value="pie">饼状图</Option>
            </Select>
          </Col>
        </Row>
      </PageHeaderWrapper>
    )
  }
}

export default Chart;
