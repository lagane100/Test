import React  from 'react';
import Editbutton from './editbutton'

export default class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '123',
            count: '456',
            visible: false
        }
        this.showModal = this.showModal.bind(this);
    }

    showModal(){
        this.setState({visible: true})
    }
    /* openModal(){
        document.getElementById('myModal').style.display = "block";
    }

    closeModal() {
        document.getElementById('editdialog').style.display = "none";
      } */

    render() {
        const {name} = this.state
        const {visible} = this.state
            return (
                
                <div>
                    
                    <button id="editbutton" onClick={this.showModal}>
                        編輯
                    </button>
                    <Editbutton visible={visible}/>
                    <p>Hello, {name}{this.state.count}!</p>
                </div>  
            )
        
        
    }
}



