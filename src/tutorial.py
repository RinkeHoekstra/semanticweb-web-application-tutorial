from flask import Flask, render_template, url_for, request, jsonify
from SPARQLWrapper import SPARQLWrapper, RDF, JSON
import requests
import traceback


app = Flask(__name__)

TUTORIAL_REPOSITORY = 'http://localhost:5820/tutorial'

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

@app.route('/sparql', methods=['GET'])
def sparql():
    app.logger.debug('You arrived at ' + url_for('sparql'))
    app.logger.debug('I received the following arguments' + str(request.args) )

    endpoint = request.args.get('endpoint', None)
    query = request.args.get('query', None)

    return_format = request.args.get('format','JSON')


    if endpoint and query :
        sparql = SPARQLWrapper(endpoint)

        sparql.setQuery(query)

        if return_format == 'RDF':
            sparql.setReturnFormat(RDF)
        else :
            sparql.setReturnFormat(JSON)
            sparql.addParameter('Accept','application/sparql-results+json')

        sparql.addParameter('reasoning','true')

        app.logger.debug('Query:\n{}'.format(query))

        app.logger.debug('Querying endpoint {}'.format(endpoint))

        try :
            response = sparql.query().convert()

            app.logger.debug('Results were returned, yay!')

            app.logger.debug(response)

            if return_format == 'RDF':
                print response
                app.logger.debug('Serializing to Turtle format')
                return response.serialize(format='turtle')
            else:
                app.logger.debug('Directly returning JSON format')
                return jsonify(response)
        except Exception as e:
            app.logger.error('Something went wrong')
            traceback.print_exc()
            return jsonify({'result': 'Error'})


    else :
        return jsonify({'result': 'Error'})

@app.route('/store', methods=['POST'])
def store():
    app.logger.debug('You arrived at ' + url_for('store'))
    app.logger.debug('I received the following arguments' + str(request.form) )

    data = request.form['data'].encode('utf-8')




    transaction_begin_url = TUTORIAL_REPOSITORY + "/transaction/begin"
    app.logger.debug('Doing a POST of your data to {}'.format(transaction_begin_url))

    # Start the transaction, and get a transaction_id
    response = requests.post(transaction_begin_url, headers={'Accept': 'text/plain'})
    transaction_id = response.content
    app.logger.debug(response.status_code)

    # POST the data to the transaction
    post_url = TUTORIAL_REPOSITORY + "/" + transaction_id + "/add"
    app.logger.debug('Assuming your data is Turtle!!')
    response = requests.post(post_url, data=data, headers={'Accept': 'text/plain', 'Content-type': 'text/turtle'})
    app.logger.debug(response.status_code)
    app.logger.debug(response.content)
    app.logger.debug(response.headers)

    if response.status_code != 200:
        return str(response.content)


    # Close the transaction
    transaction_close_url = TUTORIAL_REPOSITORY + "/transaction/commit/" + transaction_id
    response = requests.post(transaction_close_url)
    app.logger.debug(response.status_code)
    app.logger.debug(response.content)
    app.logger.debug(response.headers)

    if response.status_code != 200:
        return str(response.content)
    else:
        return "Ok!"


if __name__ == '__main__':
    app.debug = True
    app.run()
