//include data
const companyData = require("./data/companyData");

//2.1 Convert all the employee names to uppercase
const convertNamesToUpperCase = function(employees){
    const result = employees.map(emp => ({
        ...emp,
        firstName: emp.firstName.toUpperCase(),
        lastName: emp.lastName.toUpperCase(),
     } ) );

     console.log("Names uppercased:", 
        result.slice(0,3).map(e => `${e.firstName} ${e.lastName}`));
        return result;
};

// 2.2 - Convert email addresses to lowercase
const convertEmailsToLowerCase = function(employees) {
  const result = employees.map(emp => ({
    ...emp,
    email: emp.email.toLowerCase(),
  }));
  console.log("2.2 - Emails lowercased:",
    result.slice(0, 3).map(e => e.email));
  return result;
};

// 2.3 - Trim whitespace from names
const trimNames = function(employees) {
  const result = employees.map(emp => ({
    ...emp,
    firstName: emp.firstName.trim(),
    lastName: emp.lastName.trim(),
  }));
  console.log("2.3 - Names trimmed:",
    result.slice(0, 3).map(e => `${e.firstName} ${e.lastName}`));
  return result;
};

// 2.4 - Extract usernames from email addresses
const extractUsernames = function(employees) {
  const result = employees.map(emp => {
    const atIndex = emp.email.indexOf('@');
    const username = emp.email.substring(0, atIndex);
    return { ...emp,
      username
    };
  });
  console.log("Usernames extracted:",
    result.slice(0, 3).map(e => e.username));
  return result;
};

// 2.5 - Convert position names to camelCase
const convertPositionToCamelCase = function(employees) {
  const result = employees.map(emp => {
    const words = emp.position.split(' ');
    const camelCasePosition = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
    return { ...emp,
      position: camelCasePosition
    };
  });
  console.log("Positions to camelCase:",
    result.slice(0, 3).map(e => e.position));
  return result;
};

// 3.1 - Create an array of full names
const getFullNames = employees => {
  const fullNames = employees.map(emp => `${emp.firstName} ${emp.lastName}`);
  return fullNames;
};

// 3.2 - Filter employees with a salary more than 75000
const getHighEarners = employees => {
  return employees.filter(emp => emp.salary > 75000);
};

// 3.3 - Calculate the total salary
const calculateTotalSalary = employees => {
  return employees.reduce((total, emp) => total + emp.salary, 0);
};

