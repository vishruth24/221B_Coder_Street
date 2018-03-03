from flask import Flask, render_template,request,url_for,redirect,session,flash
app = Flask(__name__)

@app.route('/')
@app.route('/first')
def story1():
    return render_template('first.html')

@app.route('/login',methods=["post","get"])
def login():
    error=None
    if request.method == "POST":
        if request.form['username']!="scottriley14@outlook.com" or request.form['password'] !="spider":
            error="Invalid credentials.Please try again"
        else:
            return redirect(url_for('email'))
    return render_template('login.html',error=error)

@app.route('/email')
def email():
    return render_template('email.html')

@app.route('/email_single')
def email_single():
    return render_template('email_single.html')

@app.route('/loc')
def loc():
    return render_template('/loc.html')

@app.route('/second')
def story2():
    return render_template('second.html')

@app.route('/briefcase')
def briefcase():
    return render_template('briefcase.html')

@app.route('/itshidden')
def bot():
    return render_template('bot.html')

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8000, debug=True, threaded=True)
