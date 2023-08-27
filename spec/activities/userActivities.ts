import { apiAsserts } from "../tasks/apiAsserts";
import { usersQuestion } from "../questions/usersQuestion";
import { userInteractions } from "../interactions/userInteractions";

//Activity
export const userActivities = {
  getUserList: async () => {
    //Interaction
    userInteractions.getUsersByPage();

    //Task
    apiAsserts.ok();

    //Question
    const userListResponse = usersQuestion.getUserListResponse;

    return userListResponse;
  },
};
