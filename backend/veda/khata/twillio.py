# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
def send_msg(to,text):
  
    account_sid = "ADD YOUR OWN TWILLIO ACCOUNT SID"
    auth_token = "ADD YOUR OWN TWILLIO AUTH TOKEN"
  
  
    if not account_sid or not auth_token:
        print("some thing is missing")
    client = Client(account_sid, auth_token)
    print(f'{account_sid} {auth_token}')
    message = client.messages.create(
        body=text,
        from_="+14196050681",
       
        to=to,
    )








  
