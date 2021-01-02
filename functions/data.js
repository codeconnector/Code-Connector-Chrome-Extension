// Tip: Remember in the fall, after Nov. 1 to change from CDT TO CST. In the spring, to change back when time move forward. 
const events = [
    {
        date: new Date("4 January 2021 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/rdfvcsycccbgb/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("10 January 2021 13:00:00 CST").toJSON(),
        title:"Code Together with James Quick",
        content:"James Q. Quick is hosting a code-together where you can get help with code, or get advice on tech careers and startups.",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/cmvhwrycccbnb/",
        link:"https://us02web.zoom.us/j/87355514558"
    },
    {
        date: new Date("11 January 2021 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/rdfvcsycccbpb/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("18 January 2021 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/rdfvcsycccbxb/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("25 January 2021 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/rdfvcsycccbhc/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("26 January 2021 18:30:00 CST").toJSON(),
        title:"Code Co-op",
        content:"This isn't a class, but it is your opportunity to talk with other people in the community and get help jumpstarting your learning process or with a programming lesson / personal project you've been working on.",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/wbgfwrycccbjc/",
        link:"https://us02web.zoom.us/j/82917482160"        
    },
    {
        date: new Date("1 February 2021 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/rdfvcsyccdbcb/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
];

exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({events})
    });
  };
