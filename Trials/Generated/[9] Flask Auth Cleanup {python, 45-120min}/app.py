from flask import Flask, request, session, jsonify
import secrets
import time

app = Flask(__name__)
app.secret_key = 'dev-secret-not-great'

RESET_TOKENS = {}

@app.post('/login')
def login():
    user = request.json.get('user')
    session['user'] = user
    return jsonify({'ok': True, 'user': user})

@app.post('/logout')
def logout():
    # bug: only pops key, no broader session hygiene
    session.pop('user', None)
    return jsonify({'ok': True})

@app.post('/auth/request-reset')
def request_reset():
    user = request.json.get('user')
    token = secrets.token_hex(8)
    RESET_TOKENS[token] = {'user': user, 'exp': time.time() + 1800}
    return jsonify({'ok': True, 'token': token})

@app.post('/auth/reset')
def reset():
    token = request.json.get('token')
    rec = RESET_TOKENS.get(token)
    if not rec:
        return jsonify({'ok': False, 'error': 'bad token'}), 400
    if rec['exp'] < time.time():
        return jsonify({'ok': False, 'error': 'expired'}), 400
    return jsonify({'ok': True, 'user': rec['user']})

if __name__ == '__main__':
    app.run(debug=True, port=5010)
