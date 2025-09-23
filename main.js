function convertToJSONString(data) {
    try {
        const jsonString = JSON.stringify(data);
        console.log("JSON String conversion successful");
        return jsonString;
    } catch (error) {
        console.error("JSON conversion error:", error);
        return null;
    }
}