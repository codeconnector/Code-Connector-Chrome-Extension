exports.handler = async (event, context) => {

  const response = {
    body: "Hello, World"
  };
  
  return JSON.stringify(response);
};