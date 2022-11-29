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
from django.db import connection

categories = {}

# handles user account creation
@csrf_exempt
@api_view(['POST'])
def user_add(request):
    if request.method == 'POST':
        # retrieve username and password
        username = json.loads(request.body)['username']
        password = json.loads(request.body)['password']
        email_id = json.loads(request.body)['email']

        # insert the credentials in the database
        # TODO: handle exceptions, close cursor, test sql statement
        with connection.cursor() as cursor:
            cursor.execute("INSERT INTO user_accounts (user_id, username, password, email_id) VALUES ({username}, {password}, {email_id});", [username, password, email_id])
            cursor.execute("SELECT MAX(user_id) FROM user_accounts", [])
            user_id = cursor.fetchone()
    print(user_id)
    
    # TODO: return user_id in the json response
    return Response(json.loads(request.body), status=status.HTTP_201_CREATED)

# handles user login verification
@csrf_exempt
@api_view(['POST'])
def user_check(request):
    if request.method == 'POST':
        # retrieve username and password
        username = json.loads(request.body)['username']
        password = json.loads(request.body)['password']

        # check the credentials in the database
        # TODO: handle exceptions, close cursor, test sql statement
        with connection.cursor() as cursor:
            cursor.execute("SELECT user_id FROM user_accounts WHERE username = {username} AND password = {password};", [username, password])
            user_id = cursor.fetchone()
    print(user_id)
    
    # TODO: return user_id as json based on whether credentials are valid or not
    return Response(json.loads(request.body), status=status.HTTP_201_CREATED)

# handles user's outfit submission
@csrf_exempt
@api_view(['POST'])
def outfit_add(request):
    # - get username/user_id, an array contaning product details, created on.
    # - INSERT INTO tablename (user_id, user_submission, upvotes, created_on)
    #   VALUES ('user_id', 'array of sub details', 0, DTM);

    if request.method == 'POST':
        # retrieve username and password
        username = json.loads(request.body)['username']
    return Response(json.loads(request.body), status=status.HTTP_201_CREATED)

# returns all outfit submissions
def outfit_view(request):
    # - SELECT column1, column2
    #   FROM tablename;
    # - then send all the data in JSON to frontend
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