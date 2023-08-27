import { actorCalled } from "@serenity-js/core";

//Actor
export const actors = {
  define: async () => {
    const actor = actorCalled("Eduardo");
    return actor;
  },
};
