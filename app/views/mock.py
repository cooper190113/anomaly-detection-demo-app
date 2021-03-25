# facebook/views/profile.py

from flask import Blueprint, json, current_app as app, request
import re

mock = Blueprint('mock', __name__, url_prefix='/mock')


@mock.route('/orderService', methods=['GET'])
def order():
    data = {
        "products": [
            {
                "id": "79161a98-30e0-11e7-b4e8-9801a798fc8f",
                "pname": "bananas",
                "pprice": 5.00,
                "ptype": "fruit",
                "image": "bananas.jpg",
                "pquant": 1
            },
            {
                "id": "7915f0cc-30e0-11e7-91c7-9801a798fc8f",
                "image": "onions.jpg",
                "pname": "onions",
                "pprice": 3.00,
                "ptype": "vegetables",
                "pquant": 1
            },
            {
                "id": "79169ffe-30e0-11e7-bf3b-9801a798fc8f",
                "image": "milk.jpg",
                "pname": "milk",
                "pprice": 4.00,
                "ptype": "dairy",
                "pquant": 1
            },
            {
                "id": "7916d9ba-30e0-11e7-b66f-9801a798fc8f",
                "image": "cheese.jpg",
                "pname": "cheese",
                "pprice": 3.00,
                "ptype": "dairy",
                "pquant": 3
            },
            {
                "id": "79165436-30e0-11e7-b79a-9801a798fc8f",
                "image": "almonds.jpg",
                "pname": "almonds",
                "pprice": 10.00,
                "ptype": "nuts",
                "pquant": 1
            }
        ]
    }
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response


@mock.route('/orderService', methods=['POST'])
def log_order():
    res = request.form.to_dict(flat=False)

    # Todo: Figure out why data is unstructured
    # Rebuild data
    i = 1
    products = []
    product = {}
    for key in request.form:
        m = re.search(r"\[([A-Za-z0-9_]+)\]", key)
        # Get a new item every 7 keys
        if i % 7 == 0:
            products.append(product)
            product = {}
        product[m.group(1)] = request.form[key]
        i += 1

    for prod in products:
        app.logger.info("Order placed for {} items of {} which costs {}".format(prod['pquant'], prod['pname'], prod['pprice']))

    response = app.response_class(
        response=json.dumps({"status": "success"}),
        status=200,
        mimetype='application/json'
    )
    return response
