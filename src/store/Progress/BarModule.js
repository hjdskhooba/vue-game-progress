export default {
  state: {
    max: 1200,
    progressValue: 0,
  },
  actions: {
    getProgress({ state }, points) {
      // Сделаю мутации для max и progressValue
      if (points <= 50) {
        state.max = 150;
        state.progressValue = points;
      } else if (points <= 100) {
        state.max = 300;
        state.progressValue = points + 50;
      } else if (points <= 200) {
        state.max = 600;
        state.progressValue = 300 + points - 100;
      } else if (points <= 500) {
        state.max = 1800;
        state.progressValue = 1200 + (points - 200);
      } else if (points <= 1000) {
        state.max = 3000;
        state.progressValue = 2500 + (points - 500);
      } else {
        alert("Something went wrong");
      }
    },
  },
};
