# create endpoints here
# go to urls.py to specify what url is gonna hit this view

import json
import requests
from django.http import JsonResponse
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

        # head = {
        # "accept":"application/json",
        # "Client-Id": "Shopbop-UW-Team2",
        # "Client-Version": "1.0.0"
        # }
        # parameters = {
        #     "dept":"MENS"
        # }
        # response = requests.get("https://api.shopbop.com/public/folders",params=parameters, headers=head)
        # print(response.json())
        # json_str = json.dumps(response)
        # return JsonResponse(json_str, safe=False)
        return JsonResponse({"backend": "true", "message": "hello frontend!"})