import {
  CallAnApi,
  GetRequest,
  LastResponse,
  PostRequest,
  Send,
} from "@serenity-js/rest";
import { actorCalled, actorInTheSpotlight } from "@serenity-js/core";
import { Ensure, equals } from "@serenity-js/assertions";
import { UserCreateResponse } from "../dtos/responses/UserCreateResponse";
import { UserCreatePayload } from "../dtos/payloads/UserCreatePayload";
import { UserCreateBuilder } from "../dtos/payloads/builders/UserCreateBuilder";
import { ListUsersResponse } from "../dtos/responses/listUsersResponse";
import { actors } from "../actors/actors";
import { agentAbility } from "../abilities/agentAbilities";
import { apiAsserts } from "../tasks/apiAsserts";
import { userTask } from "../tasks/userTask";
import { userInteractions } from "../interactions/userInteractions";

describe("Users API Screenplay", () => {
  describe("List Users endpoint Screenplay", () => {
    it("should list user of application Screenplay", async () => {
      actors.define();

      agentAbility.can();

      userInteractions.getUsersByPage();

      apiAsserts.ok();

      userTask.validateListUsersResponse();
    });
  });

  describe("Create User endpoint", () => {
    it("should create user at application", async () => {
      const userCreatePayload: UserCreatePayload = UserCreateBuilder(
        "morpheus",
        "leader"
      );

      await actorCalled("Eduardo").attemptsTo(
        Send.a(
          PostRequest.to("https://reqres.in/api/users").with(
            JSON.stringify(userCreatePayload)
          )
        )
      );

      const statusCode = await actorInTheSpotlight().answer(
        LastResponse.status()
      );

      await actorInTheSpotlight().attemptsTo(
        Ensure.that(statusCode, equals(201))
      );

      const response = JSON.stringify(
        await actorInTheSpotlight().answer(LastResponse.body())
      );

      await actorInTheSpotlight().attemptsTo(
        Ensure.that(response.length > 0, equals(true))
      );

      const userCreateResponse = await actorInTheSpotlight().answer(
        LastResponse.body<UserCreateResponse>()
      );

      await actorInTheSpotlight().attemptsTo(
        Ensure.that(userCreateResponse != null, equals(true))
      );
    });
  });
});

describe("Users API", () => {
  describe("List Users endpoint", () => {
    it("should list user of application", async () => {
      const actor = actorCalled("Eduardo");

      const agent = actor.whoCan(CallAnApi.at("https://reqres.in"));

      agent.attemptsTo(Send.a(GetRequest.to("/api/users?page=2")));

      const statusCode = await actorInTheSpotlight().answer(
        LastResponse.status()
      );

      await actorInTheSpotlight().attemptsTo(
        Ensure.that(statusCode, equals(200))
      );

      const listUsersResponse = await actorInTheSpotlight().answer(
        LastResponse.body<ListUsersResponse>()
      );

      await actorInTheSpotlight().attemptsTo(
        Ensure.that(listUsersResponse != null, equals(true))
      );
    });
  });

  describe("Create User endpoint", () => {
    it("should create user at application", async () => {
      const userCreatePayload: UserCreatePayload = UserCreateBuilder(
        "morpheus",
        "leader"
      );

      await actorCalled("Eduardo").attemptsTo(
        Send.a(
          PostRequest.to("https://reqres.in/api/users").with(
            JSON.stringify(userCreatePayload)
          )
        )
      );

      const statusCode = await actorInTheSpotlight().answer(
        LastResponse.status()
      );

      await actorInTheSpotlight().attemptsTo(
        Ensure.that(statusCode, equals(201))
      );

      const response = JSON.stringify(
        await actorInTheSpotlight().answer(LastResponse.body())
      );

      await actorInTheSpotlight().attemptsTo(
        Ensure.that(response.length > 0, equals(true))
      );

      const userCreateResponse = await actorInTheSpotlight().answer(
        LastResponse.body<UserCreateResponse>()
      );

      await actorInTheSpotlight().attemptsTo(
        Ensure.that(userCreateResponse != null, equals(true))
      );
    });
  });
});
