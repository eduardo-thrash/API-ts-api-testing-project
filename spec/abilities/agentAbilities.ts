import { actorInTheSpotlight } from "@serenity-js/core";
import { CallAnApi } from "@serenity-js/rest";
import { url } from "../constans/url";

export const agentAbility = {
  can: async () => {
    const ability = actorInTheSpotlight().whoCan(CallAnApi.at(url.REQ_RES_URL));
    return ability;
  },
};
