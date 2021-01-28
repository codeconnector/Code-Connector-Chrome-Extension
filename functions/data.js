// Tip: Remember in the fall, after Nov. 1 to change from CDT TO CST. In the spring, to change back when time move forward. 
const events = [
    {
        date: new Date("29 January 2021 11:30:00 CST").toJSON(),
        title:"UX/UI Bytes",
        content:"Looking to learn about UX/UI on your lunch break? This event is for you! Spend the hour chatting about research and design concepts along with new and exciting topics in the world of UI/UX.",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/275954435/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("1 February 2021 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/rdfvcsyccdbcb/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("6 February 2021 13:00:00 CST").toJSON(),
        title:"Code Together",
        content:"Interested in coding with other people or getting help on a project that you're working on? Now, it's important to note that this isn't a class, so there won't be a teacher, but it is your opportunity to talk with other people and get help jumpstarting your learning process or with a programming lesson / personal project you've been working on.",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/rdfvcsycccbhc/",
        link:"https://us02web.zoom.us/j/83019817126"        
    },
    {
        date: new Date("8 February 2021 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/rdfvcsyccdblb/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("14 February 2021 13:00:00 CST").toJSON(),
        title:"Code Together with James Quick",
        content:"James Q. Quick is hosting a code-together where you can get help with code, or get advice on tech careers and startups.",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/cmvhwryccdbsb/",
        link:"https://us02web.zoom.us/j/87355514558"
    },
    {
        date: new Date("15 February 2021 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/rdfvcsyccdbtb/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("22 February 2021 12:00:00 CST").toJSON(),
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/rdfvcsyccdbdc/",
        link:"https://us02web.zoom.us/j/82897733166"        
    },
    {
        date: new Date("23 February 2021 18:30:00 CST").toJSON(),
        title:"Code Co-op",
        content:"This isn't a class, but it is your opportunity to talk with other people in the community and get help jumpstarting your learning process or with a programming lesson / personal project you've been working on.",
        rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/wbgfwryccdbfc/",
        link:"https://us02web.zoom.us/j/82917482160"        
    },

];

exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({events})
    });
  };
