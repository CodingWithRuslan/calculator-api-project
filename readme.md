# calculator-api project using Node.js .
 
# i will include all the steps with explantation:
Prerequisites:
Node.js and npm: Ensure Node.js and npm (Node Package Manager) are installed. If not, download and install them from the Node.js official website.
Setup and Execution Steps:
Clone the Repository:

***Setup and Execution Steps***
1.Clone the Repository:
 git clone https://github.com/CodingWithRuslan/calculator-api-project.git

2.Navigate to the Project Directory:
 cd calculator-api-project

3.Install Dependencies(To ensure the project runs without issues):
 install its dependencies with the following command: npm install

4.Run the Server:
 node server.js
 After executing, you should see the output: Server started on port 5000

5.Access the Web Application:
 http://localhost:5000

Now, you can access the calculator web application and perform arithmetic operations.





***init of the project***
    1.Ensure Node.js and npm are Installed: You can verify by running the following commands in your terminal or command prompt: node -v .
    2.Create a New Directory: mkdir calculator-api .
    3.Change your current directory to the newly created one: cd calculator-api .
    4.Initialize a New Node.js Project: Inside the calculator-api directory, run: npm init -y (This command initializes a new Node.js project with default settings by creating a package.json file. The -y flag automatically confirms the default configuration without asking you questions.)
    5.Install Required Libraries: Now, you'll install the necessary libraries: npm install express body-parser (
        This command will install:
        the express framework (used for creating the server and API routes) 
        and body-parser (used for parsing incoming request bodies in a middleware before your handlers).
        After executing these steps, your calculator-api directory should have a node_modules folder (containing the installed libraries) and a package.json file (defining your project and its dependencies).)


***Requirements:***
Implement calculator with operations +, -, /, *
All operations and results types should be exposed from Rest API.
All calculations and result building is a part of the business logic, it should be implemented on the server-side.
The Client-side should contain only presentation logic.
The Client-side should be implemented on the web, using AJAX/ Rest API.
Many applications can work with the same Rest API


***now we proceed to the next step Implementing the API .***
    1.Create the Server File: to create and open a new file named server.js.
    2.Import necessary modules express body-parser : const express = require('express');  const bodyParser = require('body-parser'); we installed both on init section of the project .
    3.init the express app: const app = express();
    4.Use body-parser middleware to parse incoming JSON requests: app.use(bodyParser.json());
    5.allows users to access static files (like HTML, CSS, JS) from the 'public' directory: app.use(express.static('public'));

***creating a class Calculator that appply Single-responsibility principle with static methods for more efficent code***
    6.creating a class Calculator that apply the Single-responsibility principle used only to calc.
    6.1.Making 4 static methods for each operation (add, subtract, multiply, divide.) becuase static method belongs to a class rather than any specific instance of that class. and in this case we dont need to create instance of the class we can just use the methods and it will make the code more efficent.

***creating API routes***
    1.POST route for '/calculate' using post to create new source : app.post('/calculate', (req, res) => { ... } );
        1.1.Destructure and extract operation and operands from the request body: const { operation, operands } = req.body; 
        1.2.now we create a try & catch block becuase maybe can happenan error (like division by zero) so we cover this error.
            1.2.1.we have 4 cases: + , - , * , / , default for each case if the operation matches the code inside the relevent case will be executed.

***Start the server***
    1.Define the port number for the server: const PORT = 5000;
    2. Start the Express application and listen on the specified port :app.listen(PORT, () => {  console.log(`Server started on port ${PORT}`); });
