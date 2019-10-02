import React,{Component} from 'react'
import Footer from "./components/Footer";
import Text from "./components/Text";
import Card from "./components/Card";
import Token from "./components/Token";
 import  './App.css'
class App extends React.Component {
    constructor() {
        super();
        this.state =
            {
                consumer: '',
                secret: '',
                bearer: ""

            }
            this.handleChange = this.handleChange.bind(this)
            this.makeCall= this.makeCall.bind(this)
        this.b64EncodeUnicode = this.b64EncodeUnicode.bind(this)
    }
    // Function to encode a string to base64 format
     b64EncodeUnicode(str) {
        // first we use encodeURIComponent to get percent-encoded UTF-8,
        // then we convert the percent encodings into raw bytes which
        // can be fed into btoa.
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
    }

    handleChange(e)
{   let name = e.target.name
    this.setState({[name]: e.target.value})

}
makeCall()
{ let proxyurl = "https://cors-anywhere.herokuapp.com/"
    let url='https://api.twitter.com/oauth2/token'
    let urlencoded = this.state.consumer+':'+this.state.secret
   urlencoded = this.b64EncodeUnicode(urlencoded)
   // urlencoded = 'aGFjekhtY0dzUldpdVhTclJNUUMxSzVXZzpqNkNXa1VDcDNZQzdDVVZiVmlFdHVtamVkNkpvelVSSlVpQW93UXp0NVFBQkpHdUNjaA=='
    fetch(proxyurl+url,{
        method:'POST',
        headers:{'Authorization':'Basic '+ urlencoded,
                    'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8.',
            'Accept': 'application/json'
        },
        body:'grant_type=client_credentials'
    }).then(response=>{
        if(response.status==200)
        {
            response.json().then(response=> this.setState({bearer: response.access_token}))
        }
        else
            {
                this.setState({bearer:'something went wrong!'})
            }

    console.log(response)
        console.log(urlencoded)
        console.log(response.access_token)
    })

}

    render() {let token
          this.state.bearer==''?token='':token=<Token value={this.state.bearer}/> // checks if bearer token is set
        return (

            <div id='app'>
                <Text/>
                <Card call={this.makeCall}consumer={this.state.consumer} secret={this.state.secret} handleChange={this.handleChange} handleChange={this.handleChange}/>
                {token}
                <Footer/>
            </div>
        )
    }
}
export default App
