import { actorInTheSpotlight } from "@serenity-js/core";
import { LastResponse } from "@serenity-js/rest";
import { ListUsersResponse } from "../dtos/responses/listUsersResponse";
import { UserCreateResponse } from "../dtos/responses/UserCreateResponse";

//Question
export const usersQuestion = {
  getUserListResponse: async () => {
    const listUsersResponse = await actorInTheSpotlight().answer(LastResponse.body<ListUsersResponse>());
    return listUsersResponse;
  },

  getUserCreatedResponse: async () => {
    const userCreateResponse = await actorInTheSpotlight().answer(LastResponse.body<UserCreateResponse>());
    return userCreateResponse;
  },
};
