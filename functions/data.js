const events = [
    {
        date:[2020,8,31,12, 0],
        testDate: 'August 31, 2020',
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybclbpc/",
        rsvp:true
    },
    {
        date:[2020,9,5,13, 0],
        testDate: 'September 5, 2020',
        title:"Code Together | North MS",
        content:"This Code Together event is a time for you to work alongside and connect with other people in your local community. ",
        link:" https://www.meetup.com/memphis-technology-user-groups/events/xlvhwrybcmbhb/",
        rsvp:true
    },
    {
        date:[2020,9,7,12, 0],
        testDate: 'September 7, 2020',
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcmbkb/",
        rsvp:true
    },
    {
        date:[2020,9,13,13, 0],
        testDate: 'September 13, 2020',
        title:"Code Together with James Quick",
        content:"James Q. Quick is hosting a code-together where you can get help with code, or get advice on tech careers and startups.",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/cmvhwrybcmbrb/",
        rsvp:true
    },
    {
        date:[2020,9,14,12, 0],
        testDate: 'September 14, 2020',
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcmbsb/",
        rsvp:true
    },
    {
        date:[2020,9,21,12, 0],
        testDate: 'September 21, 2020',
        title:"Happy Lunch Hour",
        content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
        link:"https://www.meetup.com/memphis-technology-user-groups/events/jtjlwrybcmbcc/",
        rsvp:true
    },
    {
        date:[2020,9,22,18, 30],
        testDate: 'September 22, 2020',
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