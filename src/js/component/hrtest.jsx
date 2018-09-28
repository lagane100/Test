import React, {Component} from 'react'

const lists = ['a','b','c','d'];
export default class Hrtest extends Component{
    render() {
        return(
            <ul>
                123
                {
                    lists.map((result) => {
                        return (
                            <li>{result}</li>
                        )
                    })
                }
            </ul>
        )
    }
}

