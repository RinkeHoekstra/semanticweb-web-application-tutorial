from flask import Flask, render_template, url_for, request, jsonify
from SPARQLWrapper import SPARQLWrapper, RDF, JSON
import json


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
    
@app.route('/sparql', methods=['GET'])
def sparql_rdf():
    app.logger.debug('You arrived at ' + url_for('sparql_rdf'))
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
            sparql.setReturnFormat('JSON')
        
        
        app.logger.debug('Querying endpoint {}'.format(endpoint))
        
        try :
            response = sparql.query().convert()
            
            app.logger.debug('Results were returned, yay!')
            
            app.logger.debug(response)
            
            if return_format == 'RDF':
                return response.serialize(format='turtle')
            else :
                return response
        except :
            return jsonify({'result': 'Error'})
            
        
    else :
        return jsonify({'result': 'Error'})
    
    
if __name__ == '__main__':
    app.debug = True
    app.run()