# TwitterBearerToken
Script for developers to acquire their twitter Bearer Token

##Bellow are te steps as per the twitter Api documentation.

###Step 1: 
 Encode consumer key and secret The steps to encode an application’s consumer key and secret into a set of credentials to obtain a bearer token are:

URL encode the consumer key and the consumer secret according to RFC 1738. Note that at the time of writing, this will not actually change the consumer key and secret, but this step should still be performed in case the format of those values changes in the future. Concatenate the encoded consumer key, a colon character ”:”, and the encoded consumer secret into a single string. Base64 encode the string from the previous step. Below are example values showing the result of this algorithm. Note that the consumer secret used in this page has been disabled and will not work for real requests.

Consumer key xvz1evFS4wEEPTGEFPHBog Consumer secret L8qq9PZyRg6ieKGEKhZolGC0vJWLw8iEJ88DRdyOg RFC 1738 encoded consumer key (does not change) xvz1evFS4wEEPTGEFPHBog RFC 1738 encoded consumer secret (does not change) L8qq9PZyRg6ieKGEKhZolGC0vJWLw8iEJ88DRdyOg Bearer token credentials xvz1evFS4wEEPTGEFPHBog:L8qq9PZyRg6ieKGEKhZolGC0vJWLw8iEJ88DRdyOg Base64 encoded bearer token credentials :: eHZ6MWV2RlM0d0VFUFRHRUZQSEJvZzpMOHFxOVBaeVJnNmllS0dFS2hab2xHQzB2SldMdzhpRUo4OERSZHlPZw== 


###Step 2:
Obtain a bearer token The value calculated in step 1 must be exchanged for a bearer token by issuing a request to POST oauth2 / token:

The request must be a HTTP POST request. The request must include an Authorization header with the value of Basic <base64 encoded value from step 1>. The request must include a Content-Type header with the value of application/x-www-form-urlencoded;charset=UTF-8. The body of the request must be grant_type=client_credentials. Example request (Authorization header has been wrapped):

POST /oauth2/token HTTP/1.1 Host: api.twitter.com User-Agent: My Twitter App v1.0.23 Authorization: Basic eHZ6MWV2RlM0d0VFUFRHRUZQSEJvZzpMOHFxOVBaeVJn NmllS0dFS2hab2xHQzB2SldMdzhpRUo4OERSZHlPZw== Content-Type: application/x-www-form-urlencoded;charset=UTF-8 Content-Length: 29 Accept-Encoding: gzip

grant_type=client_credentials If the request was formatted correctly, the server will respond with a JSON-encoded payload:

Example response:

HTTP/1.1 200 OK Status: 200 OK Content-Type: application/json; charset=utf-8 ... Content-Encoding: gzip Content-Length: 140

{"token_type":"bearer","access_token":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FAAAAAAAAAAAAAAAAAAAA%3DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"} Applications should verify that the value associated with the token_type key of the returned object is bearer. The value associated with the access_token key is the bearer token.

Note that one bearer token is valid for an application at a time. Issuing another request with the same credentials to /oauth2/token will return the same token until it is invalidated.

Step 3: Authenticate API requests with the bearer token The bearer token may be used to issue requests to API endpoints which support application-only auth. To use the bearer token, construct a normal HTTPS request and include an Authorization header with the value of Bearer <base64 bearer token value from step 2>. Signing is not required.

Example request (Authorization header has been wrapped):

GET /1.1/statuses/user_timeline.json?count=100&screen_name=twitterapi HTTP/1.1 Host: api.twitter.com User-Agent: My Twitter App v1.0.23 Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FAAAAAAAAAAAA AAAAAAAA%3DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA Accept-Encoding: gzip
