from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
db = SQLAlchemy(app)
CORS(app)


class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'


def Todo_visualizer(todo):
    return {
        'id': todo.id,
        'content': todo.content,
    }


@app.route("/", methods=['GET'])
def index():
    return jsonify([*map(Todo_visualizer, Todo.query.all())])


@app.route("/api/create", methods=['POST'])
def create():
    request_data = json.loads(request.data)
    todo = Todo(content=request_data['content'])

    db.session.add(todo)
    db.session.commit()

    return {'201': 'message loaded'}


@app.route('/api/<int:id>')
def show(id):
    return jsonify([*map(Todo_visualizer, Todo.query.filter_by(id=id))])


@app.route('/api/<int:id>', methods=['POST'])
def delete(id):
    request_data = json.loads(request.data)
    Todo.query.filter_by(id=request_data['id']).delete()
    db.session.commit()

    return {'204': 'Deleted successfully'}


if __name__ == '__main__':
    app.run(debug=True)
