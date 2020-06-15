import meetupData from './testData.js';

exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({eventData: meetupData})
    });
  };