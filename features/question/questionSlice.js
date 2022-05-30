import { createSlice } from "@reduxjs/toolkit";
import { delBasePath } from "next/dist/shared/lib/router/router";
import initialState from "../../store/questions";

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setAnsForCurrQuestion: (state, action) => {
      state.questions[state.currentQuestionNumber].userChoice = action.payload;
      if (state.currentQuestionNumber + 1 < state.questions.length)
        state.currentQuestionNumber += 1;
    },
    proceedQuestionNumber: (state) => {
      state.currentQuestionNumber += 1;
    },
    setQuestionMode: (st) => {
      st.questions.forEach((item) => item.userChoice == null);
      st.currentQuestionNumber = 0;
      st.showResults = false;
    },
    showResults: (state, action) => {
      state.showResults = true;
      let score = 0;
      for (const q of state.questions) {
        if (q.answer == q.userChoice) {
          score++;
        }
      }
      state.finalScore = score;
    },
    setCurrentQuestionNumber: (state, action) => {
      if (!isNaN(action.payload)) {
        state.currentQuestionNumber = action.payload;
      }
    },
    setState: (state, action) => action.payload,
  },
});

export const questionActions = questionSlice.actions;
let questionSliceReducer = questionSlice.reducer;
export default questionSliceReducer;
