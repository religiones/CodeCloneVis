import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './css/controlPanel.css'
import { CheckOutlined } from '@ant-design/icons';
import { Select, Space, Row, Col, Slider, InputNumber, Button } from 'antd';
import Search from 'antd/lib/input/Search';
const { Option } = Select;

export type ControlPanelProps = {
    controlPanelData: {
        dataset: string,
        functionNum: number,
        CodeSnip: string|number
    }
}

type ControlPanelState = {
    functionNum: number,
    loadings: Array<number|boolean>

}


class ControlPanel extends Component<ControlPanelProps, ControlPanelState> {
    state = {
        functionNum: 1,
        loadings: []
    };

    render() {
        const functionNum = this.state.functionNum;
        const loadings = this.state.loadings;
        return (
            <div style={{ width: "100%", height: "100%", padding: "10px" }}>
                <Space style={{ width: "100%" }} direction='vertical'>
                    <div className='wrap'>
                        <Row>
                            <Col span={6}>
                                <p className='label'>Load Dataset</p>
                                <Select defaultValue={"BCB"}>
                                    <Option value="BCB">BigCloneBench (BCB)</Option>
                                    <Option value="OJD">Online Judge (OJD)</Option>
                                </Select>
                            </Col>
                            <Col span={14}>
                                <p className='label'>Function Number</p>
                                <Slider min={1} max={50000} className='slider' onChange={this.loadFunction} value={typeof functionNum === 'number'? functionNum:0}></Slider>
                            </Col>
                            <Col span={4}>
                                <InputNumber className='slider-input' min={1} max={50000} value={functionNum} onChange={this.loadFunction}></InputNumber>
                            </Col>
                        </Row>
                    </div>
                    <div className='wrap'>
                        <Row>
                            <Col span={19}>
                                <p className='label'>Code Snippet Search</p>
                                <Search placeholder='input code snippet' allowClear></Search>
                            </Col>
                            <Col span={5}>
                                <Button className='button-update' type='primary' icon={<CheckOutlined />} loading={loadings[0]} onClick={() => this.enterLoading(0)}>Draw</Button>
                            </Col>
                        </Row>
                    </div>
                </Space>
            </div>
        )
    }

    loadFunction = (num: number) =>{
        this.setState({
            functionNum: num
        });
    }

    enterLoading = (index: number) => {
        this.setState(({ loadings }) => {
          const newLoadings = [...loadings];
          newLoadings[index] = true;
    
          return {
            loadings: newLoadings,
          };
        });
        setTimeout(() => {
          this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = false;
    
            return {
              loadings: newLoadings,
            };
          });
        }, 6000);
    };
}

export default ControlPanel