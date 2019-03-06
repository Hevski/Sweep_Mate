use sweep_mate_db;
db.dropDatabase();

db.sweepstakes.insertMany([
  {
    title: "6 Nations",
    picture: "https://d3gbf3ykm8gp5c.cloudfront.net/content/uploads/2018/01/31163335/1022.6666666666666x767__origin__0x0_Six_Nations_launch.jpg",
    cutOffDate: "2019-04-04",
    options: [
      {name: "France", allocatedTo: ''},
      {name: "Scotland", allocatedTo: ''},
      {name: "England", allocatedTo: ''},
      {name: "Ireland", allocatedTo: ''},
      {name: "Wales", allocatedTo: ''},
      {name: "Italy", allocatedTo: ''}
    ],
    finalAnswer: ""
  },
  {
    title: "Great British Bake Off",
    picture: "https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2018/09/BAKERS3-1024x450.png",
    cutOffDate: "2019-08-07",
    options: [
      {name: "Antony", allocatedTo: ''},
      {name: "Briony", allocatedTo: ''},
      {name: "Dan", allocatedTo: ''},
      {name: "Imelda", allocatedTo: ''},
      {name: "Jon", allocatedTo: ''},
      {name: "Karen", allocatedTo: ''},
      {name: "Kim-joy", allocatedTo: ''},
      {name: "Luke", allocatedTo: ''},
      {name: "Manon", allocatedTo: ''},
      {name: "Rahul", allocatedTo: ''},
      {name: "Ruby", allocatedTo: ''},
      {name: "Terry", allocatedTo: ''}
    ],
    finalAnswer: ""
  },
  {
    title: "World Cup",
    picture: "https://www.verdict.co.uk/wp-content/uploads/2018/06/shutterstock_1070022398.jpg",
    cutOffDate: "2021-07-07",
    options: [
      {name: "Korea Republic", allocatedTo: ''},
      {name: "Germany", allocatedTo: ''},
      {name: "Serbia", allocatedTo: ''},
      {name: "Costa Rica", allocatedTo: ''},
      {name: "Belgium", allocatedTo: ''},
      {name: "Poland", allocatedTo: ''},
      {name: "Senegal", allocatedTo: ''},
      {name: "England", allocatedTo: ''},
      {name: "France", allocatedTo: ''},
      {name: "Croatia", allocatedTo: ''},
      {name: "Panama", allocatedTo: ''},
      {name: "Tunisia", allocatedTo: ''},
      {name: "Argentina", allocatedTo: ''},
      {name: "Portugal", allocatedTo: ''},
      {name: "Mexico", allocatedTo: ''},
      {name: "Japan", allocatedTo: ''},
      {name: "Columbia", allocatedTo: ''},
      {name: "Switzerland", allocatedTo: ''},
      {name: "Uruguay", allocatedTo: ''},
      {name: "Brazil", allocatedTo: ''},
      {name: "Spain", allocatedTo: ''},
      {name: "Saudi Arabia", allocatedTo: ''},
      {name: "Egypt", allocatedTo: ''},
      {name: "Morocco", allocatedTo: ''},
      {name: "Japan", allocatedTo: ''},
      {name: "Sweden", allocatedTo: ''},
      {name: "Australia", allocatedTo: ''},
      {name: "Peru", allocatedTo: ''},
      {name: "Iceland", allocatedTo: ''},
      {name: "Nigeria", allocatedTo: ''},
      {name: "Russia", allocatedTo: ''},
      {name: "Denmark", allocatedTo: ''}
    ],
    finalAnswer: ""
  }
])
