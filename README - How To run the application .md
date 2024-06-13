## Installation and Setup

1. Clone the repository:

https://github.com/ndorokuda/inspirelabs-test.git

2. Navigate to the project directory:

Open the project in a text editor of your choice e.g (I used VS Code)

3. Requirements to run the project:

-Make sure you have php and composer setup in your system environment
-Install node.js to run npm commands

4. Install the PHP dependencies:

composer install

5. Install the Node.js dependencies:

npm install

6. Run the database migrations:

php artisan migrate

7. Build the front-end assets:

npm run dev

8. Start the development server:

php artisan serve

The application should now be accessible at `http://localhost:8000`.
