use sweep_mate_db;
db.dropDatabase();

db.sweepstakes.insertMany([
  {
    title: "6 Nations",
    picture: "https://d3gbf3ykm8gp5c.cloudfront.net/content/uploads/2018/01/31163335/1022.6666666666666x767__origin__0x0_Six_Nations_launch.jpg",
    cutOffDate: "2019-04-04",
    options: [
      {name: "France", allocated: false},
      {name: "Scotland", allocated: false},
      {name: "England", allocated: false},
      {name: "Ireland", allocated: false},
      {name: "Wales", allocated: false},
      {name: "Italy", allocated: false}
    ],
    finalAnswer: ""
  },
  {
    title: "Great British Bake Off",
    picture: "https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2018/09/BAKERS3-1024x450.png",
    cutOffDate: "2019-08-07",
    options: [
      {name: "Antony", allocated: false},
      {name: "Briony", allocated: false},
      {name: "Dan", allocated: false},
      {name: "Imelda", allocated: false},
      {name: "Jon", allocated: false},
      {name: "Karen", allocated: false},
      {name: "Kim-joy", allocated: false},
      {name: "Luke", allocated: false},
      {name: "Manon", allocated: false},
      {name: "Rahul", allocated: false},
      {name: "Ruby", allocated: false},
      {name: "Terry", allocated: false}
    ],
    finalAnswer: ""
  }
])
