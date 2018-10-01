import React from 'react';

export default class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '123',
            count: '456',
            buttonName: '編輯'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            isON: !state.isON
        }))
    }

    render() {
        const {name} = this.state
        //const {somethng} = this.props
        return (       
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isON ? 'ON' : 'OFF'}
                </button>
                <p>Hello, {name}{this.state.count}!</p>
            </div>  
        ) 
    }
}



