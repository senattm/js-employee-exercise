const companyData = require("./data/companyData");
// 1.1 - Convert to JSON string
function convertToJSONString(data) {
  try {
    const jsonString = JSON.stringify(data);
    console.log("1.1 - JSON String conversion successful");
    return jsonString;
  } catch (error) {
    console.error("JSON conversion error:", error);
    return null;
  }
}

// 1.2 - Convert JSON string to object
function parseJSONString(str) {
  try {
    const parsedData = JSON.parse(str);
    console.log("1.2 - JSON Parse operation successful");
    return parsedData;
  } catch (error) {
    console.error("JSON parse error:", error);
    return null;
  }
}

// 1.3 - Print only the employees array in JSON format
function printEmployeesJSON(data) {
  const employeesJSON = JSON.stringify(data.employees);
  console.log("Employees JSON (preview):", employeesJSON.substring(0, 100) + "...");
  return employeesJSON;
}

// 1.4 - Formatted JSON
function printFormattedJSON(data, indent = 2) {
  const formattedJSON = JSON.stringify(data, null, indent);
  console.log(`1.4 - Formatted JSON (indent=${JSON.stringify(indent)}) preview:`);
  console.log(formattedJSON.substring(0, 200) + "...");
  return formattedJSON;
}


