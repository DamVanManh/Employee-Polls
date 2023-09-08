import {
  _saveQuestionAnswer,
  _saveQuestion,
  _getUsers,
  _getQuestions,
} from "../_DATA";

describe("Test _saveQuestion", () => {
  it("should return a question if passed correctly formatted data", async () => {
    const question = {
      optionOneText: "Pizza",
      optionTwoText: "Hamburger",
      author: "zoshikanlu",
    };
    const result = await _saveQuestion(question);
    expect(result.optionOne).toBeDefined();
    expect(result.optionTwo).toBeDefined();
    expect(result.author).toBeDefined();
  });

  it("should return if incorrect data is passed to the function", async () => {
    const errorQuestion = {
      optionOneText: "",
      optionTwoText: "",
    };
    await expect(_saveQuestion(errorQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("should return if incorrect data is passed to the function", async () => {
    const errorQuestion = {
      optionOneText: null,
      optionTwoText: null,
      author: null,
    };
    await expect(_saveQuestion(errorQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("Test _saveQuestionAnswer", () => {
  it("should return true when correctly formatted data is passed to the function", async () => {
    const answer = {
      authedUser: "sarahedo",
      qid: "am8ehyc8byjqgar0jgpub9",
      answer: "optionOne",
    };
    const result = await _saveQuestionAnswer(answer);
    expect(result).toBeTruthy();
  });

  it("should return an error if incorrect data is passed to the function", async () => {
    const invalidAnswer = {
      authedUser: "",
      qid: "",
    };
    await expect(_saveQuestionAnswer(invalidAnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });

  it("should return an error if incorrect data is passed to the function", async () => {
    const invalidAnswer = {
      authedUser: null,
      qid: null,
      answer: null,
    };
    await expect(_saveQuestionAnswer(invalidAnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
