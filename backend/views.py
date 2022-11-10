# create endpoints here
# go to urls.py to specify what url is gonna hit this view

import json
import requests
from django.http import JsonResponse
from django.http import HttpResponse
from .serializers import TestSerializer

# def lambda_handler(event, context):
#     # TODO implement
#     head = {
#         "accept":"application/json",
#         "Client-Id": "Shopbop-UW-Team2",
#         "Client-Version": "1.0.0"
#     }
#     parameters = {
#         "dept":"MENS"
#     }
#     response = requests.get("https://api.shopbop.com/public/folders",params=parameters, headers=head)
#     print("response text", response.json())
#     return response.json()

def test_list(request):
    # call ShopBop API
    # serialize them
    # return JSON

        head = {
        "accept":"application/json",
        "Client-Id": "Shopbop-UW-Team2",
        "Client-Version": "1.0.0"
        }
        parameters = {
            "dept":"MENS"
        }
        response = requests.get("https://api.shopbop.com/public/folders",params=parameters, headers=head)
        json_response = response.json()
        
        # use this folders call to get the categories (and their IDs). Call this once at the start of our program.
        for category in json_response["categories"]:
            print(category['name'])
        return JsonResponse({"backend": "true", "message": "hello frontend!"})