import React from 'react';
import $ from 'jquery';

export default class Ajax_Jquery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            githubtUrl: '',
            avatarUrl: '',
        }
    }

    componentDidMount(){
        $.get(this.props.source, (result) => {
            console.log(result);
            const data = result;
            if(data){
                this.setState({
                    username: data.name,
                    githubtUrl: data.html_url,
                    avatarUrl: data.avatar_url,
                });
            }
        });
    }

    render(){
        return(
            <div>
                <h3>{this.state.username}</h3>
                <img src={this.state.avatarUrl} />
                <a herf={this.state.githubtUrl}>Github Link</a>
            </div>
        );
    }
}
