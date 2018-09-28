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
        return alert(123)
    }

    render() {
        const {name} = this.state
        //const {somethng} = this.proop
            return (
                
                <div>
                    <button onClick={this.handleClick}>
                        編輯
                    </button>
                    <p>Hello, {name}{this.state.count}!</p>
                </div>  
            )
        
        
    }
}



