const fakeData = {
  games_played: {
    {
      _id: 1,
      date: '2019-06-06',
      scorekeeper: 'the_umps',
      teams: {
        home: 'Rookie Mooves',
        visitor: 'Objection!'
      },
      innings: {
        first: {
          home: 1,
          visitor: 2
        },
        second: {
          home: 1,
          visitor: 2
        },
        third: {
          home: 1,
          visitor: 2
        },
        fourth: {
          home: 1,
          visitor: 2
        },
        fifth: {
          home: 1,
          visitor: 1
        },
      },
      totalScore: {
        home: 5,
        visitor: 9
      },
      winner: {
        game: 'Objection',
        taunt: 'Rookie Mooves'
      },
      loser: {
        game: 'Rookie Mooves',
        taunt: 'Objection'
      },
      verified: true
    },
    {
      _id: 2,
      date: '2019-06-12',
      scorekeeper: 'the_umps',
      teams: {
        home: 'The Wurst',
        visitor: 'Rookie Mooves'
      },
      innings: {
        first: {
          home: 3,
          visitor: 1
        },
        second: {
          home: 3,
          visitor: 1
        },
        third: {
          home: 3,
          visitor: 1
        },
        fourth: {
          home: 3,
          visitor: 1
        },
        fifth: {
          home: 1,
          visitor: 1
        },
      },
      totalScore: {
        home: 13,
        visitor: 5
      },
      winner: {
        game: 'The Wurst',
        taunt: 'Rookie Mooves'
      },
      loser: {
        game: 'The Wurst',
          taunt: 'Rookie Mooves'
      },
      verified: true
    },
  };
}


export default fakeData;