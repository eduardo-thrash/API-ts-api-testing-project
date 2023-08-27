import { actorInTheSpotlight } from "@serenity-js/core";
import { LastResponse } from "@serenity-js/rest";
import { ListUsersResponse } from "../dtos/responses/listUsersResponse";

//Question
export const usersQuestion = {
  getUserListResponse: async () => {
    const listUsersResponse = await actorInTheSpotlight().answer(
      LastResponse.body<ListUsersResponse>()
    );
    return listUsersResponse;
  },
};
