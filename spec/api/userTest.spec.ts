import { actors } from "../actors/actors";
import { agentAbility } from "../abilities/agentAbilities";
import { apiAsserts } from "../tasks/apiAsserts";
import { userTask } from "../tasks/userTask";
import { userInteractions } from "../interactions/userInteractions";
import { actorNames } from "../constans/actorNames";
import { Console } from "console";
import { actorInTheSpotlight } from "@serenity-js/core";
import { Ensure, equals } from "@serenity-js/assertions";

describe("Users API", () => {
  describe("List Users endpoint", () => {
    it("should list user of application", async () => {
      await actors.define(actorNames.NAME_DEFAULT);

      await agentAbility.can();

      await userInteractions.getUsersByPage();

      await apiAsserts.ok();

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
