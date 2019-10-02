import React , {Component}from 'react'
    class Button extends React.Component
    { constructor(props){
        super()
    }
    render() {

        return(<div id='button'>
                <button onClick={this.props.call}>Get Token</button>
            </div>
        )
    }

    }
export default Button
