// Required modules
const express = require('express');        // Import the express framework, Express module helps in setting up a web server easily
const bodyParser = require('body-parser'); // Import body-parser for parsing incoming request bodies making it easily accessible

// Initializing express application
const app = express();

// Middleware setup
app.use(bodyParser.json());                 // This helps in easily extracting information from POST requests sent by the client.
app.use(express.static('public'));         // This allows users to access these files (HTML, CSS, JS) from the 'public' directory via browser  


// Calculator class have one responsibility/purpose in a program appplys the The Single Responsibility Principle.
// Making methods static as they don't depend on object properties, only on their parameters.
// we use only static method because we dont need to create an instance of the class to use the methods -> for more efficent code we will use static methods less code and we dont need to create instance of the class.
class Calculator {
    static add(a, b) { return a + b; }
    static subtract(a, b) { return a - b; }
    static multiply(a, b) { return a * b; }
    static divide(a, b) {
        if (b === 0) throw new Error("Division by zero"); // Check for division by zero
        return a / b;
    }
}

// API route definition
app.post('/calculate', (req, res) => {
    // Destructure and extract operation and operands from the request body
    const { operation, operands } = req.body;

    try {
        let result;
        // Determine which calculator method to call based on the operation type
        switch (operation) {
            case '+': result = Calculator.add(operands[0], operands[1]); break;
            case '-': result = Calculator.subtract(operands[0], operands[1]); break;
            case '*': result = Calculator.multiply(operands[0], operands[1]); break;
            case '/': result = Calculator.divide(operands[0], operands[1]); break;
            default: 
                // If operation doesn't match any of the predefined ones, send an error response
                return res.status(400).send({ error: 'Invalid operation' });
        }

        // Send the result back to the client as JSON
        res.send({ result });
    } catch (error) {
        // If there's an error (like division by zero), send an error response
        res.status(500).send({ error: error.message });
    }
});


// Server initialization
// Define the port number for the server
const PORT = 5000;

// Start the Express application and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
