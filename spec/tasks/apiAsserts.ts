import { Ensure, equals } from "@serenity-js/assertions";
import { actorInTheSpotlight } from "@serenity-js/core";
import { LastResponse } from "@serenity-js/rest";
import { httpCodes } from "../constans/httpCodes";

//Task
export const apiAsserts = {
  ok: async () => {
    await actorInTheSpotlight().attemptsTo(
      Ensure.that(LastResponse.status(), equals(httpCodes.OK))
    );
  },
};
