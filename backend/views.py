# create endpoints here
# go to urls.py to specify what url is gonna hit this view

import json
import requests
from django.http import JsonResponse
from .serializers import UserSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@csrf_exempt
@api_view(['POST'])
def users_add(request):
    if request.method == 'POST':
        print(json.loads(request.body)['username'])
        # insert the username in the database
    return Response(json.loads(request.body), status=status.HTTP_201_CREATED)

def product_list(request):
    # call ShopBop API -> serialize response if needed -> return json response
    category = request.GET.get('category')
    searchQuery = request.GET.get('q')
    categories = {
        "Clothing": "13243",
        "Tops": "13252",
        "Boots": "13205",
        "Jeans": "13255",
        "Shoes": "13265",
        "Boots": "13205",
        "Sandals": "13202",
        "Hats": "13236",
        "Jackets & Coats": "13256"
    }
    head = {
        "accept":"application/json",
        "Client-Id": "Shopbop-UW-Team2",
        "Client-Version": "1.0.0"
    }
    parameters = {
        "categoryId":categories[category],
        "q": searchQuery,
        "limit": 2
    }
    URL = "https://api.shopbop.com/public/categories/{}/products".format(categories[category])

    response = requests.get(URL, params=parameters, headers=head)
    response = response.json()  # type dictionary

    return JsonResponse(response)