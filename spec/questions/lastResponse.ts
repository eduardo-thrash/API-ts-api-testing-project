import { actorInTheSpotlight } from "@serenity-js/core";
import { LastResponse } from "@serenity-js/rest";

//Question
export const lastResponse = {
  getStatusCode: async () => {
    const statusCode = await actorInTheSpotlight().attemptsTo(
      LastResponse.status()
    );
    return statusCode;
  },
};
