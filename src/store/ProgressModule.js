export const progressModule = {
  state: {
    stages: [
      {
        name: "Этап первый",
        id: 1,
        thresholdPoints: 25,
        games: [
          {
            name: "Игра 1.1",
            bestResult: 21,
            isPlayed: false,
          },
        ],
      },
      {
        name: "Этап второй",
        id: 2,
        thresholdPoints: 50,
        games: [
          {
            name: "Игра 2.1",
            bestResult: 0,
            isPlayed: false,
          },
        ],
      },
      {
        id: 3,
        name: "Этап третий",
        thresholdPoints: 100,
        games: [
          {
            name: "Игра 3.1",
            bestResult: 0,
            isPlayed: false,
          },
        ],
      },
      {
        id: 4,
        name: "Этап четвертый",
        thresholdPoints: 200,
        games: [
          {
            name: "Игра 4.1",
            bestResult: 0,
            isPlayed: false,
          },
        ],
      },
      {
        id: 5,
        name: "Этап пятый",
        thresholdPoints: 500,
        games: [
          {
            name: "Игра 5.1",
            bestResult: 0,
            isPlayed: false,
          },
        ],
      },
      {
        id: 6,
        name: "Этап шестой",
        thresholdPoints: 1000,
        games: [
          {
            name: "Игра 6.1",
            bestResult: 0,
            isPlayed: false,
          },
          {
            name: "Игра 6.2",
            bestResult: 0,
            isPlayed: false,
          },
        ],
      },
    ],
  },
  getters: {
    result: (state) => {
      //   for (let i = 0; i < state.stages.length; i++) {
      //     for (let j = 0; j < state.stages[i].length; j++) {
      //       return state.stages[i]
      //     }
      //   }
      //   state.stages.map((stage) => stage.game.bestResult);
      return state.stages[0].games[0].bestResult;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};
