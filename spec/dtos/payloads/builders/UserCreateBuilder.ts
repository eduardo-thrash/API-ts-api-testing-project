import { UserCreatePayload } from "../UserCreatePayload";

export const UserCreateBuilder = (
  name: string,
  job: string
): UserCreatePayload => ({
  name,
  job,
});
