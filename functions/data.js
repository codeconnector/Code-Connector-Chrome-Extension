const events = [
    {
        date: new Date("21 September 2020 12:00:00 CDT").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcmbcc/",
        rsvp:true
    },
    {
        date: new Date("22 September 2020 18:30:00 CDT").toJSON(),
        title:"Code Co-op | Resume Workshop",
        content:"Our workshop consists of a panel of devs here to help! The panel includes James Quick, RJ Beers, Steve Hallman and Danny Thompson. Each panelist will take 10-15 minutes to review 2 resumes and share good things they observe as well as areas for improvement.",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/wbgfwrybcmbdc/",
        rsvp:true
    },
    {
        date: new Date("22 October 2020 13:00:00 CDT").toJSON(),
        title:"Code Together | Hacktoberfest Kickoff",
        content:"Join us to learn about Digital Ocean’s Hacktoberfest event, hear from Code Connector members and their projects you can contribute to, or give a shout out to your own project!",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/xlvhwrybcnbfb/",
        rsvp:true
    },
];

exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({events})
    });
  };
