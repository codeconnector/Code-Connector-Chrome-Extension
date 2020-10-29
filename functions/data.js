// Tip: Remember in the fall, after Nov. 1 to change from CDT TO CST. In the spring, to change back when time move forward. 
const events = [
    {
        date: new Date("2 November 2020 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcpbdb/",
        link:"https://us02web.zoom.us/j/82897733166"
    },
    {
        date: new Date("8 November 2020 13:00:00 CST").toJSON(),
        title:"Code Together with James Quick",
        content:"James Q. Quick is hosting a code-together where you can get help with code, or get advice on tech careers and startups.",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/cmvhwrybcpblb/",
        link:"https://us02web.zoom.us/j/87355514558"
    },
    {
        date: new Date("9 November 2020 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcpbmb/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("16 November 2020 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcpbvb/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("23 November 2020 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcpbfc/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("30 November 2020 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcpbnc/",
        link:"https://us02web.zoom.us/j/82897733166"        
    }
];

exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({events})
    });
  };
