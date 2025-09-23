// main.js
const companyData = require("./data/companyData"); 

// 1.1 - convert companyData to JSON string
function convertToJSONString(data) {
  try {
    const jsonString = JSON.stringify(data);
    console.log("JSON String conersion succesful");
    return jsonString;
  } catch (error) {
    console.error("JSON conversion error:", error);
    return null;
  }
}


