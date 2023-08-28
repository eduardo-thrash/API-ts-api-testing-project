import { actors } from "../actors/actors";
import { agentAbility } from "../abilities/agentAbilities";
import { apiAsserts } from "../tasks/apiAsserts";
import { userTask } from "../tasks/userTask";
import { userInteractions } from "../interactions/userInteractions";

describe("Users API Screenplay", () => {
  describe("List Users endpoint Screenplay", () => {
    it("should list user of application Screenplay", async () => {
      await actors.define();

      await agentAbility.can();

      await userInteractions.getUsersByPage();

      await apiAsserts.ok();

      await userTask.validateListUsersResponse();
    });
  });
});
