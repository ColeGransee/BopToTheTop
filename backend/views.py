# create endpoints here
# go to urls.py to specify what url is gonna hit this view

import json
import requests
from django.http import JsonResponse
from django.http import HttpResponse
from .serializers import TestSerializer

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
    categories = {}
    for category in json_response["categories"]:
        if category['name'] == "Jewelry & Accessories" or category['name'] == "Clothing":
            # iterate through that categories' children, after adding that categories' ID to dict
            categories[category['name']] = category['id']
            for child in category['children']:
                categories[child['name']] = child['id'] 
    return categories

def test_list(request):
    # call ShopBop API
    # serialize them
    # return JSON
    categories = get_category_ids()
    print(categories)
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

    return JsonResponse(product_list, safe=False)