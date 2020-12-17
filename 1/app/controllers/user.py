from app.models.user import Users
from app import response, app, db
from flask import request

def get_users():
    try:
        users = Users.query.all()
        data = transform(users)
        return response.ok(data, "Users successfully retrieved")
    except Exception as e:
        print(e)


def get_user(id):
    try:
        user = Users.query.get(id)

        if not user:
            return response.badRequest([], 'User not found')

        data = singleTransform(user)
        return response.ok(data, "")
    except Exception as e:
        print(e)


def add_user():
    try:
        email=request.json['email']
        user = Users(email=email)
        db.session.add(user)
        db.session.commit()
        return response.ok('', 'User successfully created')
    except Exception as e:
        print(e)


def singleTransform(user):
    data = {
        'id': user.id,
        'email': user.email
    }

    return data


def transform(users):
    array = []
    for user in users:
        array.append(singleTransform(user))
    return array


