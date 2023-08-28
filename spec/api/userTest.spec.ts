import { actors } from "../actors/actors";
import { agentAbility } from "../abilities/agentAbilities";
import { apiAsserts } from "../tasks/apiAsserts";
import { userTask } from "../tasks/userTask";
import { userInteractions } from "../interactions/userInteractions";
import { actorNames } from "../constans/actorNames";
import { recall, remember } from "../interactions/actorMemory";
import { actorMemories } from "../constans/actorMemories";
import { constants } from "../constans/constants";

describe("Users API", () => {
  describe("List Users endpoint", () => {
    it("should list user of application", async () => {
      await actors.define(actorNames.NAME_DEFAULT);

      await agentAbility.can();

      await remember(actorMemories.FULL_NAME, constants.FULL_NAME);

      await userInteractions.getUsersByPage();

      await apiAsserts.ok();

      const fullName = await recall(actorMemories.FULL_NAME);
      console.log(fullName);

      await userTask.validateListUsersResponse();
    });
  });

  describe("Create User endpoint", () => {
    it("should create user at application", async () => {
      await actors.define(actorNames.NAME_DEFAULT);

      await agentAbility.can();

      const userCreateResponse = await userInteractions.postUserCreate("morpheus", "leader");

      await apiAsserts.created();

      await userTask.validateUserCreatedResponse(userCreateResponse);
    });
  });
});
