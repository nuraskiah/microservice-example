from flask import jsonify, make_response


def ok(data, message):
    res = {
        'status': 'success',
        'message': message,
        'data': data
    }

    return make_response(jsonify(res)), 200


def badRequest(data, message):
    res = {
        'status': 'fail',
        'message': message,
        'data': data
    }

    return make_response(jsonify(res)), 400


def serverError(data, message):
    res = {
        'status': 'error',
        'message': message,
        'data': data
    }

    return make_response(jsonify(res)), 500
