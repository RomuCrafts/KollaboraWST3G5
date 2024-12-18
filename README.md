Procedure for checking out Kollabora:
`pip install -r requirements.txt` = Install dependencies listed in requirements.txt.
`python manage.py migrate` = for database
`python manage.py createsuperuser` = for admin interface
`npm install` = to install dependencies necessary from other sources.
`Kollabora\Scripts\activate`  = to go inside venv of Kollabora
Running the respective development server:
`python manage.py runserver` = (use after Kollabora\Scripts\activate) backend (e.g., APIs) at http://127.0.0.1:8000/.
`npm start` =(use while at the directory of frontend) frontend React app at http://localhost:3000/.
