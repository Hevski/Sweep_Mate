use sweep_mate_db;
db.dropDatabase();

db.sweepstakes.insertMany([
  {
    title: "6 Nations",
    picture: "https://d3gbf3ykm8gp5c.cloudfront.net/content/uploads/2018/01/31163335/1022.6666666666666x767__origin__0x0_Six_Nations_launch.jpg",
    cutOffDate: "01-02-2019",
    options: [
      {name: "France", allocated: false},
      {name: "Scotland", allocated: false},
      {name: "England", allocated: false},
      {name: "Ireland", allocated: false},
      {name: "Wales", allocated: false},
      {name: "Italy", allocated: false}
    ],
    finalAnswer: ""
  }
])

// The players collection will be populated by playing
// db.players.insertMany([
//   {
//     name: "Carme",
//     email: "Carme@gmail.com",
//     games: [
//       {game_id:"", allocatedOption: "France", won: false}
//     ]
//   },
//   {
//     name: "Neil",
//     email: "Neil@gmail.com",
//     games: [
//       {game_id:"", allocatedOption: "England", won: false}
//     ]
//   },
//   {
//     name: "Heather",
//     email: "Heather@gmail.com",
//     games: [
//       {game_id:"", allocatedOption: "Wales", won: false}
//     ]
//   }
// ])
