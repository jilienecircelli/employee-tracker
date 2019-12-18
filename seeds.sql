USE employeeTrackerDB;
INSERT INTO department (name)
VALUES
  ("Management"),
  ("Sales"),
  ("Finance"),
  ("Administration");
INSERT INTO employee_role (title, salary, department_id)
VALUES
  ("Sales Manager", 100000, 2),
  ("Lead Supervisor", 120000, 1),
  ("Financial Analyst", 90000, 3),
  ("Assistant", 70000, 4);
SELECT
  *
FROM employee;
USE employeeTrackerDB;
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ("Jane", "Doe", 4, 1),
  ("John", "Smith", 1, null),
  ("Sam", "Pott", 2, 1),
  ("Brian", "Johnson", 3, 1);