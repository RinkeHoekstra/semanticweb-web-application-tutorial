from flask import Flask, render_template, url_for, request

app = Flask(__name__)

@app.route('/')
def first_page():
    app.logger.debug('You arrived at ' + url_for('first_page'))
    return render_template('index.html')
    
@app.route('/show',methods=['GET'])
def show_message():
    app.logger.debug('You arrived at ' + url_for('show_message'))
    app.logger.debug('I received the following arguments' + str(request.args) )
    
    # Get the message from the GET request, if nothing is found, set a default message.
    message = request.args.get('message', 'No message sent!')
    
    return render_template('message.html', message=message)
    
    
if __name__ == '__main__':
    app.debug = True
    app.run()