import { actorInTheSpotlight } from "@serenity-js/core";
import { CallAnApi } from "@serenity-js/rest";

export const agentAbility = {
  can: async () => {
    const ability = actorInTheSpotlight().whoCan(
      CallAnApi.at("https://reqres.in")
    );
    return ability;
  },
};
