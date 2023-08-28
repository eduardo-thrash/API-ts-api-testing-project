import { Ensure, equals } from "@serenity-js/assertions";
import { actorInTheSpotlight } from "@serenity-js/core";
import { LastResponse } from "@serenity-js/rest";
import { httpCodes } from "../constans/httpCodes";
import { AssertEnsure } from "./AssertEnsure";

//Task
export const apiAsserts = {
  ok: async () => {
    const lastResponse = await actorInTheSpotlight().answer(LastResponse.status());
    const isTheCodeStatusCorrect = AssertEnsure.that.isEqualTo(lastResponse, httpCodes.OK);
    if (!isTheCodeStatusCorrect) {
      await actorInTheSpotlight().attemptsTo(Ensure.that(LastResponse.status(), equals(httpCodes.OK)));
    }
  },
};
