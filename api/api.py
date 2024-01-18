import time
from flask import Flask

app = Flask(__name__, static_folder="../build", static_url_path='/')

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

if __name__ == "__main__":
    app.run(debug=False)