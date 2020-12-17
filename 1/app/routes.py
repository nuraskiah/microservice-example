from app import app
from app.controllers import location, user


# Location

@app.route('/api/locations', methods=['GET'])
def get():
    return location.get_locations()

@app.route('/api/location', methods=['POST'])
def store():
    return location.add_location()


# User

@app.route('/api/users', methods=['GET'])
def users():
    return user.get_users()
    
@app.route('/api/user/<id>', methods=['GET'])
def user_by_id(id):
    print(id)
    return user.get_user(id)

@app.route('/api/user', methods=['POST'])
def store_user():
    return user.add_user()