import { actorInTheSpotlight } from "@serenity-js/core";
import { GetRequest, LastResponse, PostRequest, Send } from "@serenity-js/rest";
import { userEndpoints } from "../constans/userEndpoints";
import { UserCreatePayload } from "../dtos/payloads/UserCreatePayload";
import { UserCreateBuilder } from "../dtos/payloads/builders/UserCreateBuilder";
import { UserCreateResponse } from "../dtos/responses/UserCreateResponse";

//Interaction
export const userInteractions = {
  getUsersByPage: async () => {
    await actorInTheSpotlight().attemptsTo(Send.a(GetRequest.to(userEndpoints.LIST_USERS)));
  },

  postUserCreate: async (name: string, job: string) => {
    const userCreatePayload: UserCreatePayload = UserCreateBuilder(name, job);

    await actorInTheSpotlight().attemptsTo(Send.a(PostRequest.to(userEndpoints.CREATE).with(JSON.stringify(userCreatePayload))));

    const userCreateResponse = await actorInTheSpotlight().answer(LastResponse.body<UserCreateResponse>());

    return userCreateResponse;
  },
};
