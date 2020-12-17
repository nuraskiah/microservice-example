from app.models.location import Locations
from app import response, app, db
from flask import request


def get_locations():
    try:
        locations = Locations.query.all()
        data = transform(locations)
        return response.ok(data, "Locations successfully retrieved")
    except Exception as e:
        print(e)
        

def add_location():
    try:
        name=request.json['name']
        location = Locations(name=name)
        db.session.add(location)
        db.session.commit()
        return response.ok('', 'Location successfully created')
    except Exception as e:
        print(e)


def transform(locations):
    array = []
    for i in locations:
        array.append({
            'id': i.id,
            'name': i.name,
        })
    return array
