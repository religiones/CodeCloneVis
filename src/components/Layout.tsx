import React, {Component} from 'react';
import './css/layout.css'

interface layoutState{
  name: string,
  id: number
}

class Layout extends Component<any, layoutState> {

  constructor(props: any){
    super(props)
    this.state = {
      name : "hello",
      id: 1
    }
  }

  render(){
      return (
        <div className='container'>
          <div>{this.state.name}</div>
          <div>{this.state.id}</div>
        </div>
      )
  }

  componentDidMount(){
    // this.setState({
    //   name: "world"
    // })
  }

}

export default Layout