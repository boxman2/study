from flask import Flask, render_template, request, jsonify
app = Flask(__name__)
from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@atlascluster.dlmyuct.mongodb.net/AtlasCluster?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/mars', methods=['POST'])
def web_mars_post():
    name_receive = request.form['name_give']
    address_receive = request.form['address_give']
    size_receive = request.form['size_give']

    doc = {"name":name_receive, "address":address_receive, "size":int(size_receive)}
    db.mars.insert_one(doc)
    return jsonify({'msg':'Successfully ordered'})

@app.route("/mars", methods=["GET"])
def web_mars_get():
    order_list = list(db.mars.find({}, {'_id': False}))
    return jsonify({'msg':'10기 화이팅!', 'orders': order_list})

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)