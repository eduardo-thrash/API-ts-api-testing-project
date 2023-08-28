import { actorInTheSpotlight, Log, TestCompromisedError } from "@serenity-js/core";

export const AssertEnsure = {
  that: {
    isEqualTo: (actual: number | string | boolean | object, expected: number | string | boolean | object) => {
      return AssertEnsure.assertions.assertIsEqualsTo(actual, expected);
    },
    isNotEqualTo: (actual: number | string | boolean | object, expected: number | string | boolean | object) => {
      return AssertEnsure.assertions.assertIsNotEqualsTo(actual, expected);
    },
  },

  assertions: {
    assertIsEqualsTo: (actual: number | string | boolean | object, expected: number | string | boolean | object): boolean => actual === expected,
    assertIsNotEqualsTo: (actual: number | string | boolean | object, expected: number | string | boolean | object): boolean => actual != expected,
  },
};
