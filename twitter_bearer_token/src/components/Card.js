import React ,{Component}from 'react'
import Button from './Button'

    class  Card extends React.Component
    {constructor(props){
        super()
    }
    render()
    {
        return(<div id='card'>
            <label>Consumer key</label>
            <input onChange={this.props.handleChange} value={this.props.consumer} name='consumer' type='text'/>
            <label>Consumer secret key</label>
            <input onChange={this.props.handleChange} name='secret' value={this.props.secret} type='text'/>
            <Button call={this.props.call}/>

        </div> )
    }



    }

export default Card