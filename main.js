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

