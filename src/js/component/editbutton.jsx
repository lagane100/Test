import React, {Component} from 'react';


class SignIn extends Component{
  constructor(props){
    super(props)
    this.state = {
      visible: false
    }
    this.mask = this.mask.bind(this);
    this.confirm = this.confirm.bind(this);
    this.closebutton = this.closebutton.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ visible: props.visible })
  }
  
  closebutton(){
    console.log('closebutton')
    const { onClose } = this.props
    onClose && onClose()
    this.setState({ visible: false })
  }

  mask(){
    console.log('mask')
  }

  confirm(){
    console.log('confirm')
    const { confirm } = this.props
    confirm && confirm()
    this.setState({ visible: false })
  }

  render(){
    const {visible} = this.state;
    return visible &&
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-title">編輯</div>
        <div className="modal-content">
          <imput type="date"></imput>
        
        
        
        
        
        </div>
        <div className="modal-operator">
          <button className="modal-operator-confirm" onClick={this.confirm}>確認</button>
          <button className="modal-operator-close" onClick={this.closebutton}>取消</button>
        </div>
      </div>
      <div className="mask" onClick={this.mask}></div>
    </div>
  }
}

export default SignIn;