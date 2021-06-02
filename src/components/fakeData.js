const fakeData = {
  games_played: [
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
    }
  ],
  teams: [
    {
      _id: 1,
      name: 'Dungeons & Ballers',
      record: {
        taunt: {
          wins: 2,
          losses: 7
        },
        game: {
          wins: 8,
          losses: 1
        },
      },
      runs_scored: 39,
      runs_allowed: 13
    },
    {
      _id: 2,
      name: 'Tragic Kingdom',
      record: {
        taunt: {
          wins: 7,
          losses: 2
        },
        game: {
          wins: 7,
          losses: 2
        },
      },
      runs_scored: 44,
      runs_allowed: 13
    },
    {
      _id: 3,
      name: 'P.S.A.',
      record: {
        taunt: {
          wins: 5,
          losses: 4
        },
        game: {
          wins: 7,
          losses: 2
        },
      },
      runs_scored: 63,
      runs_allowed: 35
    },
    {
      _id: 4,
      name: 'Objection!',
      record: {
        taunt: {
          wins: 6,
          losses: 3
        },
        game: {
          wins: 6,
          losses: 3
        },
      },
      runs_scored: 54,
      runs_allowed: 50
    },
    {
      _id: 5,
      name: 'NC Double Eh?',
      record: {
        taunt: {
          wins: 4,
          losses: 5
        },
        game: {
          wins: 4,
          losses: 5
        },
      },
      runs_scored: 40,
      runs_allowed: 36
    },
    {
      _id: 6,
      name: 'Fremont Trolls',
      record: {
        taunt: {
          wins: 2,
          losses: 7
        },
        game: {
          wins: 4,
          losses: 5
        },
      },
      runs_scored: 55,
      runs_allowed: 46
    },
    {
      _id: 7,
      name: 'Yachty By Nature',
      record: {
        taunt: {
          wins: 2,
          losses: 7
        },
        game: {
          wins: 3,
          losses: 6
        },
      },
      runs_scored: 50,
      runs_allowed: 47
    },
    {
      _id: 8,
      name: 'Comically Bad',
      record: {
        taunt: {
          wins: 4,
          losses: 5
        },
        game: {
          wins: 3,
          losses: 6
        },
      },
      runs_scored: 36,
      runs_allowed: 56
    },
    {
      _id: 9,
      name: 'The Wurst',
      record: {
        taunt: {
          wins: 6,
          losses: 3
        },
        game: {
          wins: 2,
          losses: 7
        },
      },
      runs_scored: 48,
      runs_allowed: 67
    },
    {
      _id: 10,
      name: 'Rookie Mooves',
      record: {
        taunt: {
          wins: 7,
          losses: 2
        },
        game: {
          wins: 1,
          losses: 8
        },
      },
      runs_scored: 34,
      runs_allowed: 80
    }
  ]
}


export default fakeData;