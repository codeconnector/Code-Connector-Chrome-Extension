const events = [
    {
        date:"August 31, 2020",
        time:"12pm CST",
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybclbpc/",
        rsvp:true
    },
    {
        date:"September 5, 2020",
        time:"12pm CST",
        title:"Code Together | North MS",
        content:"This Code Together event is a time for you to work alongside and connect with other people in your local community. ",
        link:" https://www.meetup.com/memphis-technology-user-groups/events/xlvhwrybcmbhb/",
        rsvp:true
    },
    {
        date:"September 7, 2020",
        time:"12pm CST",
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcmbkb/",
        rsvp:true
    },
    {
        date:"September 13, 2020",
        time:"1:00pm CST",
        title:"Code Together with James Quick",
        content:"James Q. Quick is hosting a code-together where you can get help with code, or get advice on tech careers and startups.",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/cmvhwrybcmbrb/",
        rsvp:true
    },
    {
        date:"September 14 2020",
        time:"12pm CST",
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcmbsb/",
        rsvp:true
    },
    {
        date:"September 21, 2020",
        time:"12pm CST",
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcmbcc/",
        rsvp:true
    },
    {
        date:"September 22, 2020",
        time:"6:30pm CST",
        title:"Code Co-op",
        content:"This month we are presenting several lighting talks by multiple speakers such as Azhya Knox 'The Game Plan into Developer Land' and Matt Karmazyn 'Measuring the Success of DevOps in your Organization'.",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/wbgfwrybcmbdc/",
        rsvp:true
    },
];

exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({msg: events})
    });
  };