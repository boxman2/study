from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@atlascluster.dlmyuct.mongodb.net/AtlasCluster?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
   return render_template('index.html')

@app.route("/homework", methods=["POST"])
def homework_post():
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']

    doc = {'name':name_receive, 'comment':comment_receive}

    db.homework2.insert_one(doc)

    return jsonify({'msg':'연결 완료!'})

@app.route("/homework", methods=["GET"])
def homework_get():
    db_list = list(db.homework2.find({}, {'_id': False}))
    return jsonify({"dbs":db_list})

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)