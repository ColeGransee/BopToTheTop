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
        username = str(json.loads(request.body)['username'])
        password = str(json.loads(request.body)['password'])

        # insert the credentials in the database
        try:
            with connection.cursor() as cursor:
                cursor.execute("INSERT INTO user_accounts(username, password) VALUES ('{username}', '{password}\') RETURNING user_id;".format(username=username, password=password))
                user_id = cursor.fetchone()
            ret_id = str(user_id[0])
        except Exception:
            ret_id = "-1"
    
    return_response = JsonResponse([ret_id], safe=False)
    return_response['Cross-Origin-Opener-Policy'] ='*'
    return_response['Access-Control-Allow-Origin'] ='*'
    return return_response

# handles user login verification
@csrf_exempt
@api_view(['POST'])
def user_login(request):
    # retrieve username and password
    username = json.loads(request.body)['username']
    password = json.loads(request.body)['password']

    # check the credentials in the database
    with connection.cursor() as cursor:
        cursor.execute("SELECT user_id FROM user_accounts WHERE username = '{username}' AND password = '{password}';".format(username=username, password=password))
        user_id = cursor.fetchone()

    if user_id:
        ret_id = str(user_id[0])
    else:
        ret_id = "-1"
    return_response = JsonResponse([ret_id], safe=False)
    return_response['Cross-Origin-Opener-Policy'] ='*'
    return_response['Access-Control-Allow-Origin'] ='*'
    return return_response

@csrf_exempt
@api_view(['POST'])
def outfit_add(request):
    # @params: 
    #   username - username for this submission
    #   user_submission - json array of top, bottom and accessory
    # returns: submission_id
    if request.method == 'POST':
        # retrieve username and password
        username = str(json.loads(request.body)['username'])
        user_submission = str(json.loads(request.body)['user_submission'])
        # upvotes = json.loads(request.body)['upvotes']
        upvotes = 0

    try:
        with connection.cursor() as cursor:
            cursor.execute("INSERT INTO user_submissions(username, user_submission, upvotes) VALUES ('{username}', '{user_submission}', '{upvotes}\') RETURNING submission_id;".format(username=username, user_submission=user_submission, upvotes=upvotes))
            submission_id = cursor.fetchone()
    except Exception:
        submission_id = "-1"

    return_response = JsonResponse([submission_id], safe=False)
    return_response['Cross-Origin-Opener-Policy'] ='*'
    return_response['Access-Control-Allow-Origin'] ='*'
    return return_response

# returns all outfit submissions
@csrf_exempt
@api_view(['GET'])
def outfit_view(request):
    # returns: all submissions as an array
    with connection.cursor() as cursor:
        cursor.execute("SELECT username, user_submission, upvotes FROM user_submissions")
        outfits = cursor.fetchall()

    return_response = JsonResponse(outfits, safe=False)
    return_response['Cross-Origin-Opener-Policy'] ='*'
    return_response['Access-Control-Allow-Origin'] ='*'
    return return_response

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