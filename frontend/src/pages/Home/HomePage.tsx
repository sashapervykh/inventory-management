import { useUser } from "../../entity/user/model/useUser";

export function HomePage() {
  const { user } = useUser();

  return user ? <div>user</div> : <div>HOME</div>;
}
