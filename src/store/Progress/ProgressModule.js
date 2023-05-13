import BarModule from "./BarModule.js";

export const progressModule = {
  state: {
    games: null,
    points: 0,
    stages: [
      {
        name: "Этап первый",
        id: 1,
        thresholdPoints: 25,
        games: [
          {
            name: "Игра 1.1",
            bestResult: 0,
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
    calculatedPoints(state) {
      return state.stages.reduce((totalPoints, stage) => {
        const game = stage.games[0];
        return totalPoints + game.bestResult;
      }, 0);
    },
  },
  mutations: {
    // Not done yet
    updatePoints(state, value) {
      return (state.points = value);
    },
  },
  modules: {
    bar: BarModule,
  },
};
