from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/pythonreactdb'
mongo = PyMongo(app)

db = mongo.db.users
#Metodo para crear el usuario
@app.route('/users', methods=['POST'])
def createUser():
    id = db.insert({
        'name':  request.json['name'],
        'email':  request.json['email'],
        'password':  request.json['password']
    })
    return jsonify(str(ObjectId(id)))
#Metodo para listar usuarios
@app.route('/users', methods=['GET'])
def getUsers():
    users = []
    for doc in db.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'name'   : doc['name'],
            'email': doc['email'],
            'password':doc['password']
        })
    return jsonify(users)
#Metodo para listar un usuario
@app.route('/users/<id>', methods=['GET'])
def getUser(id):
    user = db.find_one({'_id': ObjectId(id)})
    print(user)
    return jsonify({
        '_id': str(ObjectId(user['_id'])),
        'name': user['name'],
        'email' : user['email'],
        'password': user['password']
    })
#Metodo para eliminar 
@app.route('/users/<id>', methods=['DELETE'])
def deleteUser(id):
    db.delete_one({'_id': ObjectId(id) })
    return jsonify({'msg': 'User is delete'})
#Metodo para editar 
@app.route('/users/<id>', methods=['PUT'])
def updateUser(id):
    return 'received'

if __name__ == "__main__":
    app.run(debug=True)