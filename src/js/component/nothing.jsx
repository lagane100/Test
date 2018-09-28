import React from 'react';

const ProfilePic = (props) =>{
    return (
        <img src={'http://graph.facebook.com/' + props.username + '/picture'} />
    );
}

const ProfileLink = (props) => {
    return (
        <a herf={'http://www.facebook.com/' + props.username}>
            {props.username}
        </a>
    );
}

export default class nothing extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: props.username
        }
    }
    render(){
        return (
            <div>
                <ProfilePic username={username} />
                <ProfileLink username={username} />
            </div>
        );
    }
}