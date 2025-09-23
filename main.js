const companyData = require("./data/companyData"); // <-- THIS LINE IS REQUIRED AT THE TOP

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

