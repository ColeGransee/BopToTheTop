# create endpoints here
# go to urls.py to specify what url is gonna hit this view

import json
import requests
from django.http import JsonResponse
from django.http import HttpResponse
from .serializers import UserSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

categories = {}

@csrf_exempt
@api_view(['POST'])
def users_add(request):
    if request.method == 'POST':
        print(json.loads(request.body)['username'])
        # insert the username in the database
    return Response(json.loads(request.body), status=status.HTTP_201_CREATED)

# helper method that runs on startup, as defined in apps.py. Gets category for Women's department.
def get_category_ids():
    head = {
        "accept":"application/json",
        "Client-Id": "Shopbop-UW-Team2",
        "Client-Version": "1.0.0"
        }
    parameters = {
        "dept":"WOMENS"
    }
    response = requests.get("https://api.shopbop.com/public/folders",params=parameters, headers=head)
    json_response = response.json()
    
    # use this folders call to get the categories (and their IDs). Call this once at the start of our program.
    for category in json_response["categories"]:
        if category['name'] == "Jewelry & Accessories" or category['name'] == "Clothing":
            # iterate through that categories' children, after adding that categories' ID to dict
            categories[category['name']] = category['id']
            for child in category['children']:
                categories[child['name']] = child['id'] 

def products_list(request):
    category = request.GET.get('category')
    categoryId = categories[category]

    parameters = {
        "dept":"WOMENS",
        "offset":40
    }
    head = {
    "accept":"application/json",
    "Client-Id": "Shopbop-UW-Team2",
    "Client-Version": "1.0.0"
    }
    response = requests.get(f"https://api.shopbop.com/public/categories/{categoryId}/products",params=parameters, headers=head)
    json_response = response.json()

    product_list = []
    for result in json_response["products"]:
        product_info = {}

        product = result["product"]
        product_info["Brand"] = product["designerName"]
        product_info["Name"] = product["shortDescription"]
        product_info["Price"] = product["retailPrice"]["price"]
        product_info["Url"] = product["productDetailUrl"]
        product_info["Image"] = product["colors"][0]["images"][0]["src"]

        product_list.append(product_info)

    return_response = JsonResponse(product_list, safe=False)
    return_response['Cross-Origin-Opener-Policy'] ='*'
    return_response['Access-Control-Allow-Origin'] ='*'
    return return_response