# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
def send_msg(to,text):
  
 
    account_sid = ""
    auth_token = ""
    print(f'{account_sid} {auth_token}')
    if not account_sid or not auth_token:
        print("some thing is missing")
    client = Client(account_sid, auth_token)
    print(f'{account_sid} {auth_token}')
    message = client.messages.create(
        body=text,
        from_=""
        # to="+917766840942",
        to=to,
    )

    print(message.body)

send_msg("+918095877374","environment variable working")




  
