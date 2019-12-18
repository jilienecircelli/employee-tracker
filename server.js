var mysql = require("mysql");
var inquirer = require("inquirer")
const consoleTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "mysqlmysql",
    database: "employeeTrackerDB"
});

connection.connect(function(err) {
    if (err) throw err;
    start()
});

function start() {
    inquirer
        .prompt({
            type: "list",
            message: "Would you like to do?",
            name: "action",
            choices: ["View all employees", "View All employees by department", "Add employee", "Remove employee", "Update role", "Update manager"]
        }).then(
            function({ action }) {
                switch (action) {
                    case "View all employees":
                        viewAllEmployees()
                        break;
                    case "View All employees by department":
                        //
                        viewByDepartment()
                        break;
                    case "Add employee":
                        //
                        addEmployee()
                        break;
                    case "Remove employee":
                        //
                        removeEmployee()
                        break;
                    case "Update role":
                        //
                        updateRole()
                        break;
                    case "Update manager":
                        //
                        updateManager()
                        break;
                }
            }
        )
};

function viewAllEmployees() {
    const query = "SELECT * FROM employee INNER JOIN employee_role INNER JOIN department";
    connection.query(query, function(err, res) {
        if (err) throw err
        for (i = 0; i < res.length; i++) {
            console.table(res[i])
        }
        start()
    })
};

function viewByDepartment() {
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err
        var departmentChoices = [];
        for (i = 0; i < res.length; i++) {
            departmentChoices.push(res[i].name)
        }
        inquirer.prompt([{
                type: "list",
                name: "department",
                message: "Select a department to view employees",
                choices: departmentChoices
            }])
            .then(function({ department }) {
                var query = ""
                connection.query(query, [department], function(err, res) {
                    if (err) throw err
                    for (i = 0; i < res.length; i++) {
                        console.table(res[i])
                    }
                    start();
                })
            })
    })
};