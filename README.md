Note: Make sure to be working on the right directory, especially when installing packages, make sure to be inside a venv

`python -m venv <project name>` = make a Python Virtual Environment

`<Project Name>\Scripts\activate` = to activate Virtual Environment(venv) and have an independent python installation and dependencies inside. Also have a requirements.txt at GitHub if ever.
ex.
`<venv name>\Scripts\activate` = to go inside venv of Kollabora
`deactivate` = to exit from venv of a project

Python commands:
`pip install python`
`pip install django`

`django-admin startproject <project name>` 
`django-admin startproject project_management .` = add a dot to make it be built inside the current folder.
`cd <project name>` = to go inside the new project folder

React app:
`npx create-react-app frontend`
`npx create-react-app frontend --use-npm --legacy-peer-deps` = used to bypass the too high version that is incompatible 

`cd frontend` =before installing dependencies like Axios and React-router-dom
`npm install axios react-router-dom`

Django REST Framework:
`pip install djangorestframework`

`npm install` to install dependencies necessary from other sources.
like how I installed web-vitals

Running the respective development server:
`python manage.py runserver` = (use after Kollabora\Scripts\activate) backend (e.g., APIs) at http://127.0.0.1:8000/.
`npm start` =(use while at the directory of frontend) frontend React app at http://localhost:3000/.

Optionals:
`pip freeze > requirements.txt`    = Save dependencies to a file for sharing with your team.
`pip install -r requirements.txt` = Install dependencies listed in requirements.txt.
`python manage.py makemigrations` = for database
`python manage.py migrate` = for database
`python manage.py createsuperuser` = for admin interface
