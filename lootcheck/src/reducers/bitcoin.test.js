import { bitcoinReducer } from "./bitcoin";
import { FETCH_BITCOIN } from "../actions/constants";

describe("bitcoinReducer", () => {
  const bitcoin = { bpi: "bitcoin price index" };

  it("fetches and sets the bitcoin data", () => {
    expect(
      bitcoinReducer({}, { type: FETCH_BITCOIN, payload: bitcoin })
    ).toEqual(bitcoin);
  });
});
