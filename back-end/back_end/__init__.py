import json
import pathlib
import requests
from flask import Flask, jsonify

app = Flask(__name__)

with open(list(pathlib.Path(__name__).glob("./urls.json"))[0]) as f:
    urls = json.loads(f.read())
    app.config.update(
        urls
    )


@app.route('/pokemon/<pokemon_name>')
def read_pokemon(pokemon_name):
    pokemon_object = requests.get(f'{app.config["POKEMON_URL"]}{pokemon_name}/').raise_for_status().json()
    species_object = requests.get(pokemon_object['species']['url']).raise_for_status().json()
    flavour_text = species_object['flavor_text_entries'][0]['flavor_text']
    shakespeare_text = requests.post(app.config['SHAKESPEARE_URL'], data={'text': flavour_text}).raise_for_status().json()
    return jsonify(shakespeare_text)