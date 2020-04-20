# django-react-movie-app

Installation guide:

Backend:
* cd to /backend
* pip instll virtualenv
* virtualenv .env
* source .env/Script/activate to activate virtualenv
* cd to /src
* pip install django
* pip install djangorestframework
* pip install django-admin
* python manage.py migrate
* python manage.py runserver

Frontend:
* cd to /frontend/movie-gui
* npm i to install dependencies
* npm start to run script and start react sever

You can add your own movie models from django-admin site.

Useful uris:
* http://localhost:8000/api/ this displays the json of all movie objects
* http://localhost:8000/api/{ID} where ID is the movie id, this will show the detail of one movie object with the ID of ID

