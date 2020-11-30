// Tip: Remember in the fall, after Nov. 1 to change from CDT TO CST. In the spring, to change back when time move forward. 
const events = [
    {
        date: new Date("30 November 2020 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/xlvhwrybcqbhb/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("7 December 2020 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcqbkb/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("13 December 2020 13:00:00 CST").toJSON(),
        title:"Code Together with James Quick",
        content:"James Q. Quick is hosting a code-together where you can get help with code, or get advice on tech careers and startups.",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/cmvhwrybcqbrb/",
        link:"https://us02web.zoom.us/j/87355514558"
    },
    {
        date: new Date("14 December 2020 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcqbsb/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("21 December 2020 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcqbcc/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("28 December 2020 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcqblc/",
        link:"https://us02web.zoom.us/j/82897733166"        
    }
];

exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({events})
    });
  };
