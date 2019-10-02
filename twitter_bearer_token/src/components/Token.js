import React ,{Component}from 'react'
class Token extends React.Component
{  constructor(props){
    super()
}
render() {
    return(<div id='token'>
        {this.props.value}

    </div> )
}


}
export default Token