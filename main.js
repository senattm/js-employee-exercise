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

// 3.4 - Find employee by ID
const findById = (employees, id) => {
  return employees.find(emp => emp.id === id);
};

// 3.5 - Sort employees by salary from highest to lowest 
const sortEmployeesBySalary = employees => {
  const sortedEmployees = [...employees].sort((a, b) => b.salary - a.salary);
  return sortedEmployees;
};

// 3.6 - Check if anyone has JavaScript skills
const hasJavaScriptSkill = employees => {
  return employees.some(emp => emp.skills.includes('JavaScript'));
};

// 3.7 - Get the first 3 employees
const getFirstThreeEmployees = employees => {
  return employees.slice(0, 3);
};

// 3.8 - Combine skills into a single string
const getSkillsAsString = employee => {
  return employee.skills.join(', ');
};

const objectUtils = {
    // 4.1 - Get all keys of an object
    getObjectKeys(obj) {
        return Object.keys(obj);
    }, 

    // 4.2 - Get all values of an object
    getObjectValues(obj) {
        return Object.values(obj);
    },
     // 4.3 - Loop and print key-value pairs
    printObjectEntries(obj) {
    for (const [key, value] of Object.entries(obj)) {
      console.log(`- ${key}: ${value}`);
    }
  },
  // 4.4 - Create an object copy and add a bonus
  addBonus(obj, bonusAmount) {
    return Object.assign({}, obj, {
      bonus: bonusAmount
    });
  }, 

  // 4.5 - Check if the object has a property
  hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
  }
};

// 5.1 - Convert start dates to a Date object
const convertStartDates = () => {
    const datesConverted = companyData.employees.map(emp => ({
        name: `${emp.firstName} ${emp.lastName}`,
        startDate: new Date(emp.startDate)
    }));
    console.log("Start dates have been converted");
    return datesConverted;
};

// 5.2 - Calculate how many years employees have worked
const calculateWorkingYears = () => {
    const currentDate = new Date();
    const workingYears = companyData.employees.map(emp => {
        const startDate = new Date(emp.startDate);
        const years = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365.25);
        return {
            name: `${emp.firstName} ${emp.lastName}`,
            years: Math.floor(years)
        };
    });
    console.log("Working years:", workingYears);
    return workingYears;
};

// 5.3 - Find the day of the week they started working
const getStartDayOfWeek = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const startDays = companyData.employees.map(emp => {
        const startDate = new Date(emp.startDate);
        return {
            name: `${emp.firstName} ${emp.lastName}`,
            day: days[startDate.getDay()]
        };
    });
    console.log("Start days of the week:", startDays);
    return startDays;
};

// 5.4 - Format dates to "day/month/year"
const formatDates = () => {
    const formattedDates = companyData.employees.map(emp => {
        const startDate = new Date(emp.startDate);
        return {
            name: `${emp.firstName} ${emp.lastName}`,
            formattedDate: startDate.toLocaleDateString('tr-TR')
        };
    });
    console.log("Formatted dates:", formattedDates);
    return formattedDates;
};

// 5.5 - Find the longest-serving employee
const findLongestWorkingEmployee = () => {
    const employeeWithDates = companyData.employees.map(emp => ({
        ...emp,
        startDate: new Date(emp.startDate)
    }));

    const longestWorking = employeeWithDates.reduce((oldest, current) =>
        current.startDate < oldest.startDate ? current : oldest
    );

    console.log("Longest working employee:",
        `${longestWorking.firstName} ${longestWorking.lastName}`);

    return longestWorking;
};

// 6.1 - Create an Employee constructor
function Employee(id, firstName, lastName, position, salary, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
    this.email = email;
;}

// 6.2 - Create new employee instances
const newEmployee1 = new Employee(201, "Sena", "Atim", "Engineer", 50000, "sena@hotmail.com");

// 6.3 - Add a method to the prototype
Employee.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

Employee.prototype.calculateYearlySalary = function() {
    return this.salary * 12;
};

// 6.4 - Add a static method  
Employee.getAllEmployees = function() {
    return companyData.employees;
};

Employee.getTotalEmployeeCount = function() {
    return companyData.employees.length;
};


// 7.1 - Write a callback on employees
const processEmployees = (employees, callback) => {
    return employees.map(callback);
};

const employeeProcessor = (employee) => {
    return `${employee.firstName} ${employee.lastName} - ${employee.department}`;
};

// 7.2 - Use a callback in array methods
const departmentFilter = (department) => {
    return (employee) => employee.department === department;
};

// 7.3 - Create a callback for filtering
const salaryFilter = (minSalary) => {
    return (employee) => employee.salary >= minSalary;
};

// 7.4 - Write a data transformation callback
const transformEmployee = (employee) => {
    return {
        id: employee.id,
        fullName: `${employee.firstName} ${employee.lastName}`,
        contact: employee.email,
        role: employee.position,
        income: employee.salary,
        active: employee.isActive
    };
};

 // 8.1 - Create a salary filter function
function createSalaryFilter(minSalary, maxSalary = Infinity) {
    return function(employee) {
        return employee.salary >= minSalary && employee.salary <= maxSalary;
    };
};

// 8.2 - Takes a department name and return a new function
function createDepartmentFilter(department) {
    return function(employee) {
        return employee.department.toLowerCase() === department.toLowerCase();
    };
};

// 8.3 - Create a skill search factory function
    function createSkillSearchFilter(skill) {
    return function(employee) {
        return employee.skills.some(s => 
            s.toLowerCase().includes(skill.toLowerCase())
        );
    };
};

// 8.4 - Function that generates sorting function 
function createSortFunction(field, order = 'asc') {
    return function(a, b) {
        const aValue = a[field];
        const bValue = b[field];
        
        if (order === 'asc') {
            return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
        } else {
            return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
        }
    };
};

// 9.1 Add closure for employee counter
   const createEmployeeCounter = () => {
        let count = 0; 
        return () => {
            count++;
            return count;
        };
    };

 // 9.2  Add function creates calculator that remembers a percentage increase.
    const createSalaryCalculator = (increasePercentage) => {
        return (baseSalary) => {
            return baseSalary * (1 + increasePercentage);
        };
    };

// 9.3 Function creates a unique ID generator.
 const createIDGenerator = () => {
        let lastID = 0; 
        return () => {
            lastID++;
            return `EMP-${lastID}`;
        };
    };

// 9.4 Function creates a simple, private caching system.
    const createCacheSystem = () => {       
        const cache = {};      
        return {
            get: (key) => cache[key],
            set: (key, value) => {
                cache[key] = value;
                return `Cached: ${key}`;
            }
        };
    };

// 10.1 An async function.
async function loadEmployeeData(delay = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(companyData.employees);
        }, delay);
    });
};

// 10.2 Promise chain.
async function processEmployeeDataChain() {
    return loadEmployeeData(500)
        .then(employees => {
            console.log("10.2 - Data loaded, processing...");
            return employees.filter(emp => emp.isActive);
        })
        .then(activeEmployees => {
            console.log("Active employees filtered:", activeEmployees.length);
            return activeEmployees.map(emp => emp.firstName);
        })
        .then(names => {
            console.log("Names extracted:", names);
            return names;
        });
};

// 10.3 A Promise-producing function that can either resolve or reject.
const fetchEmployeeDataAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate a network failure 50% of the time.
            if (Math.random() > 0.5) {
                reject("Error: Network connection failed.");
            } else {
                resolve(companyData.employees);
            }
        }, 1500); 
    });
};

// 10.4 Multiple async function.
async function performMultipleOperations() {
    try {
        const [employees, departments, salaryStats] = await Promise.all([
            Promise.resolve(companyData.employees),
            Promise.resolve(['Development', 'Design', 'Management', 'Operations']),
            Promise.resolve({ min: 65000, max: 90000, avg: 79000 })
        ]);

        console.log("10.4 - Multiple operations completed");
        console.log("Employees loaded:", employees.length);

        return { employees, departments, salaryStats };
    } catch (error) {
        console.error("Error in multiple operations:", error);
        return null;
    }
};

//11.1 Create employee factory.
 const createEmployee = (firstName, lastName, email, position, salary, department, skills = []) => ({
    id: Date.now() + Math.random(),
    firstName,
    lastName,
    email,
    position,
    salary,
    department,
    skills,
    isActive: true,
    startDate: new Date().toISOString().split('T')[0],

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    addSkill(skill) {
        if (!this.skills.includes(skill)) {
            this.skills.push(skill);
        }
        return this.skills;
    },

    updateSalary(newSalary) {
        this.salary = newSalary;
        return this.salary;
    }
});

// 11.2 Create department factory.
const createDepartment = (name, employees) => {
    return {
        name: name,
        employees: employees,

        getHeadcount: () => {
            return employees.length;
        },
        
        getEmployeeNames: () => {
            return employees.map(emp => `${emp.firstName} ${emp.lastName}`);
        }
    };
};

// 11.3 Create project factory.
const createProject = (id, name, status, teamMembers, budget) => {
    return {
        id,
        name,
        status,
        teamMembers,
        budget,
        
        // Add new member to the team.
        addTeamMember: (employeeId) => {
            if (!teamMembers.includes(employeeId)) {
                teamMembers.push(employeeId);
                console.log(`Employee ID ${employeeId}, '${name}' is added to the project.`);
            } else {
                console.log(`Employee ID ${employeeId} is already in project.`);
            }
        },      
    };
};

// 11.4 Create report factory.
const createReport = (type, data) => {
    const reportDate = new Date().toLocaleDateString('en-US');

    return {
        type: type,
        data: data,

        // A method that generates and returns the report based on its type.
        generate: () => {
            if (type === "summary") {
                return `Sumary Report\nDate: ${reportDate}\nTotal Records: ${data.length}`;
            } else if (type === "detailed") {
                return `Detailed Report\nDate: ${reportDate}\nData: ${JSON.stringify(data, null, 2)}`;
            } else {
                return `Unknown report type: '${type}'`;
            }
        }
    };
};
