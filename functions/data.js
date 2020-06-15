const data = [
  {
      date:"June 22, 2020",
      time:"12pm CST",
      title:"Happy Lunch Hour",
      content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
      rsvp:"https://us02web.zoom.us/j/82897733166"
  },
  {
      date:"June 23, 2020",
      time:"6:30pm CST",
      title:"Code Co-op",
      content:"This month we are presenting several lighting talks  by multiple speakers such as James Quick, Corey McCarty, etc.",
      rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/sdnpsrybcjbfc/"
  },
  {
      date:"June 29, 2020",
      time:"12pm CST",
      title:"Happy Lunch Hour",
      content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
      rsvp:"https://us02web.zoom.us/j/82897733166"
  },
  {
      date:"July 4, 2020",
      time:"12pm CST",
      title:"Code Together | North MS",
      content:"This Code Together event is a time for you to work alongside and connect with other people in your local community. ",
      rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/slpvsrybckbgb/"
  },
  {
      date:"July 6, 2020",
      time:"12pm CST",
      title:"Happy Lunch Hour",
      content:"If you're interested in meeting with other developers and chatting about tech, life, etc. during your lunch break, you're more than welcome join us at our virtual table",
      rsvp:"https://us02web.zoom.us/j/82897733166"
  },
  {
      date:"July 12, 2020",
      time:"1:00pm CST",
      title:"Code Together with James Quick",
      content:"James Q. Quick is hosting a code-together where you can get help with code, or get advice on tech careers and startups.",
      rsvp:"https://www.meetup.com/memphis-technology-user-groups/events/nkpvsrybckbqb/"
  }
];

exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({msg: "Hello World"}})
    });
  };