from flask import Flask, render_template, request
import json

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/test')
def test():
    return render_template('test.html')


@app.route('/plantGrower', methods=['GET', 'POST'])
def plantGrower():
    if request.method == 'POST':
        # Create JSON
        out = {
            "waterMl": str(request.form['sunAmount']),
            "light_minutes": str(request.form['waterAmount'])
        }
        outJson = json.dumps(out)
        outF = open("./autoGrower/config.json", "w")
        outF.write(outJson)
    return render_template('plantGrower.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
