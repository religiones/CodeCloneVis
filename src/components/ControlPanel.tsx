import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './css/controlPanel.css'
import { Select, Space, Row, Col, Slider } from 'antd';
import Search from 'antd/lib/input/Search';
const { Option } = Select;


export type ControlPanelProps = {
}

type ControlPanelState = {
    functionNum: string;
}


class ControlPanel extends Component<ControlPanelProps, ControlPanelState> {
    state = {
        functionNum: '1'
    };

    render() {
        return (
            <div style={{ width: "100%", height: "100%", padding: "10px" }}>
                <Space style={{ width: "100%" }} direction='vertical'>
                    <div className='wrap'>
                        <Row>
                            <Col span={10}>
                                <p className='label'>Load Dataset</p>
                                <Select defaultValue={"BCB"}>
                                    <Option value="BCB">BigCloneBench (BCB)</Option>
                                    <Option value="OJD">Online Judge (OJD)</Option>
                                </Select>
                            </Col>
                            <Col span={14}>
                                <p className='label'>Funtion Number</p>
                                <Slider min={1} max={50000} className='slider'></Slider>
                            </Col>
                        </Row>
                    </div>
                    <div className='wrap'>
                        <p className='label'>Code Snippet Search</p>
                        <Search placeholder='input code snippet' allowClear></Search>
                    </div>
                </Space>
            </div>
        )
    }
}

export default ControlPanel