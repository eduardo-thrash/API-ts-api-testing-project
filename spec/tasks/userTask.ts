import { Ensure, equals } from "@serenity-js/assertions";
import { actorInTheSpotlight } from "@serenity-js/core";
import { usersQuestion } from "../questions/usersQuestion";

//Task
export const userTask = {
  validateListUsersResponse: async () => {
    await actorInTheSpotlight().attemptsTo(
      Ensure.that(usersQuestion.getUserListResponse != null, equals(true))
    );
  },
};
