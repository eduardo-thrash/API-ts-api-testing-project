import { Log, actorInTheSpotlight } from "@serenity-js/core";
import { usersQuestion } from "../questions/usersQuestion";
import { equals } from "@serenity-js/assertions";
import { BussinessEnsure } from "./BussinessEnsure";
import { AssertEnsure } from "./AssertEnsure";
import { userMessages } from "../constans/userMessages";
import { UserCreateResponse } from "../dtos/responses/UserCreateResponse";

//Task
export const userTask = {
  validateListUsersResponse: async () => {
    const isNotEqualTo = AssertEnsure.that.isNotEqualTo(usersQuestion.getUserListResponse(), {});
    await actorInTheSpotlight().attemptsTo(BussinessEnsure.that(isNotEqualTo, equals(true), userMessages.USER_LIST_DISPLAYED_SUCCESFUL, userMessages.USER_LIST_DISPLAYED_FAILED));
  },

  validateUserCreatedResponse: async (userCreateResponse: UserCreateResponse) => {
    const isNotEqualTo = AssertEnsure.that.isNotEqualTo(userCreateResponse, {});
    await actorInTheSpotlight().attemptsTo(BussinessEnsure.that(isNotEqualTo, equals(true), userMessages.USER_CREATED_SUCCESFUL, userMessages.USER_CREATED_FAILED));
    if (isNotEqualTo === true) {
      Log.the(`${JSON.stringify(userCreateResponse)}`).performAs(actorInTheSpotlight());
    }
  },
};
