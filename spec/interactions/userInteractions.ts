import { actorInTheSpotlight } from "@serenity-js/core";
import { GetRequest, Send } from "@serenity-js/rest";

//Interaction
export const userInteractions = {
  getUsersByPage: async () => {
    await actorInTheSpotlight().attemptsTo(
      Send.a(GetRequest.to("/api/users?page=2"))
    );
  },
};
