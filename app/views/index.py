from flask import Blueprint, render_template, send_from_directory, current_app as app

index_blueprint = Blueprint('index', __name__, template_folder='build', static_folder='build/static')


@index_blueprint.route("/")
def index():
    return render_template('index.html')


@index_blueprint.route('/favicon.ico')
def send_ico():
    return send_from_directory(app.root_path + '/build/', 'favicon.ico', conditional=True)


@index_blueprint.route('/logo.svg')
def send_logo():
    return send_from_directory(app.root_path + '/build/', 'logo.svg', conditional=True)


@index_blueprint.route("/css/<filename>")
def send_css(filename):
    return send_from_directory(app.root_path + '/build/', "css/" + filename, conditional=True)


@index_blueprint.route("/images/<filename>")
def send_images(filename):
    return send_from_directory(app.root_path + '/build/', "images/" + filename, conditional=True)
