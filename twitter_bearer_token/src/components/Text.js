import React from 'react'

function Text()
{ return(<div id='text'>
     <h1>Twitter Application only authentication </h1>
    <br/>
        <ol>
            <li>URL encode the consumer key and the consumer secret according to RFC 1738.</li>
            <li>Concatenate the encoded consumer key, a colon character ”:”, and the encoded consumer secret into a single string.</li>
            <li>Base64 encode the string from the previous step.</li>
            <li>The request must be a HTTP POST request.</li>
            <li>The request must include an Authorization header with the value of Basic base64 encoded value from step 1.</li>
            <li>The request must include a Content-Type header with the value of application/x-www-form-urlencoded;charset=UTF-8.</li>
            <li>The body of the request must be grant_type=client_credentials</li>

        </ol>


    </div>

)


}
export default Text