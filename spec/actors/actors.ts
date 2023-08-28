import { actorCalled } from "@serenity-js/core";

//Actor
export const actors = {
  define: async (actorName: string) => {
    const actor = actorCalled(actorName);
    return actor;
  },
};
