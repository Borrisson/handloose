import { getHighestScoreFromUser, getLongestStreakFromUser } from "./selectors";

const state = {
  user: {
    created_at: "2021-03-16T23:16:16.211Z",
    email: "mitzi@gleason.name",
    id: 1,
    name: "Orlando",
    password_digest:
      "$2a$12$kmMuROHXGcGrPRNBo/UZyOFwgyKRZ8NIZeZI.,s13RCbg3ZEyyonxS",
    updated_at: "2021-03-16T23:16:16.211Z",
  },
  games: [
    {
      created_at: "2021-03-16T23:16:16.244Z",
      id: 1,
      key_stroke_frequency: 80,
      longest_streak: 6,
      score: 51363153,
      updated_at: "2021-03-16T23:16:16.244Z",
      user_id: 1,
    },
    {
      created_at: "2021-03-16T23:16:16.244Z",
      id: 1,
      key_stroke_frequency: 80,
      longest_streak: 10,
      score: 1231516,
      updated_at: "2021-03-16T23:16:16.244Z",
      user_id: 1,
    },
    {
      created_at: "2021-03-16T23:16:16.244Z",
      id: 1,
      key_stroke_frequency: 80,
      longest_streak: 20,
      score: 1265611,
      updated_at: "2021-03-16T23:16:16.244Z",
      user_id: 1,
    },
    {
      created_at: "2021-03-16T23:16:16.244Z",
      id: 1,
      key_stroke_frequency: 80,
      longest_streak: 70,
      score: 5133513,
      updated_at: "2021-03-16T23:16:16.244Z",
      user_id: 1,
    },
    {
      created_at: "2021-03-16T23:16:16.244Z",
      id: 1,
      key_stroke_frequency: 80,
      longest_streak: 2,
      score: 5313513,
      updated_at: "2021-03-16T23:16:16.244Z",
      user_id: 1,
    },
    {
      created_at: "2021-03-16T23:16:16.244Z",
      id: 1,
      key_stroke_frequency: 80,
      longest_streak: 1,
      score: 53143243513,
      updated_at: "2021-03-16T23:16:16.244Z",
      user_id: 2,
    },
  ],
  accuracies: [
    {
      character: "u",
      created_at: "2021-03-16T23:16:16.260Z",
      game_id: 1,
      hit: true,
      id: 1,
      updated_at: "2021-03-16T23:16:16.260Z",
    },
  ],
};

const NoGamesState = {
  user: {
    created_at: "2021-03-16T23:16:16.211Z",
    email: "mitzi@gleason.name",
    id: 1,
    name: "Orlando",
    password_digest:
      "$2a$12$kmMuROHXGcGrPRNBo/UZyOFwgyKRZ8NIZeZI.,s13RCbg3ZEyyonxS",
    updated_at: "2021-03-16T23:16:16.211Z",
  },
  games: [],
  accuracies: [],
};

describe("selectors", () => {
  describe("getHighestScoreFromUserId", () => {
    it("it returns an empty array if no games exist (New registered USER)", () => {
      expect(getHighestScoreFromUser(NoGamesState)).toHaveLength(0);
    });
    it("it returns a particular users highest score from a userId", () => {
      expect(getHighestScoreFromUser(state)).toBe(51363153);
    });
  });
  describe("getLongestStreakFromUserId", () => {
    it("it returns an empty array if no games exist (New registered USER)", () => {
      expect(getLongestStreakFromUser(NoGamesState)).toHaveLength(0);
    });
    it("it returns a particular users longest streak from a userId", () => {
      expect(getLongestStreakFromUser(state)).toBe(70);
    });
  });
});
