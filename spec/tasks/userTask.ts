import { actorInTheSpotlight } from "@serenity-js/core";
import { usersQuestion } from "../questions/usersQuestion";
import { Ensure, equals } from "@serenity-js/assertions";
import { BussinessEnsure } from "./BussinessEnsure";
import { AssertEnsure } from "./AssertEnsure";

//Task
export const userTask = {
  validateListUsersResponse: async () => {
    const isNotEqualTo = AssertEnsure.that.isNotEqualTo(usersQuestion.getUserListResponse(), {});
    await actorInTheSpotlight().attemptsTo(BussinessEnsure.that(isNotEqualTo, equals(true), "the user list are displayed successful", "the user list have not been displayed"));
  },
};
