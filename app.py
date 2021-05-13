from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/test')
def test():
    return render_template('test.html')


@app.route('/plantGrower')
def plantGrower():
    defaultTxt = "0"
    data = request.form.get('waterInput', defaultTxt)
    return render_template('plantGrower.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
