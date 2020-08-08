const events = [
    {
        date:"July 20, 2020",
        time:"12pm CST",
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://us02web.zoom.us/j/82897733166",
        rsvp:false
    },
    {
        date:"July 27, 2020",
        time:"12pm CST",
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://us02web.zoom.us/j/82897733166",
        rsvp:false
    },
    {
        date:"July 28, 2020",
        time:"6:30pm CST",
        title:"Code Co-op",
        content:"Sr. Agile Coach Steve Hallman will be giving an inspiring talk on using Trello for personal projects or in an Agile professional environment!",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/sdnpsrybckblc/",
        rsvp:true
    },

    {
        date:"August 1, 2020",
        time:"12pm CST",
        title:"Code Together | North MS",
        content:"This Code Together event is a time for you to work alongside and connect with other people in your local community. ",
        link:" https://www.meetup.com/memphis-technology-user-groups/events/slpvsrybclbcb",
        rsvp:true
    },
    {
        date:"Augest 3, 2020",
        time:"12pm CST",
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://us02web.zoom.us/j/82897733166",
        rsvp:false
    },
    {
        date:"August 9, 2020",
        time:"1:00pm CST",
        title:"Code Together with James Quick",
        content:"James Q. Quick is hosting a code-together where you can get help with code, or get advice on tech careers and startups.",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/nkpvsrybclbmb/",
        rsvp:true
    },
    {
        date:"Augest 10, 2020",
        time:"12pm CST",
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/hdjtvrybclbnb/",
        rsvp:true
    },
    {
        date:"Augest 17, 2020",
        time:"12pm CST",
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/hdjtvrybclbwb/",
        rsvp:true
    },
    {
        date:"Augest 24, 2020",
        time:"12pm CST",
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/hdjtvrybclbgc/",
        rsvp:true
    },
    {
        date:"August 25, 2020",
        time:"6:30pm CST",
        title:"Code Co-op",
        content:"This month we are presenting several lighting talks by multiple speakers such as Azhya Knox 'The Game Plan into Developer Land' and Matt Karmazyn 'Measuring the Success of DevOps in your Organization'.",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/sdnpsrybclbhc/",
        rsvp:true
    },
];

exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({msg: events})
    });
  };