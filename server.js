var mysql = require("mysql");
var inquirer = require("inquirer")

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
            function(action) {
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
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if (err) throw err
        for (i = 0; i < res.length; i++) {
            console.table(res[i])
        }
        start();
    })
};

function viewByDepartment() {
    const query = "SELECT * FROM employee GROUP BY department_id"
}