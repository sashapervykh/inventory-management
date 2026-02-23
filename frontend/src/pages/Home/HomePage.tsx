import { useUser } from "../../entity/user/model/useUser";

export function HomePage() {
  const { user } = useUser();
  console.log(user);
  return user ? (
    <div>
      user {user.firstName} {user.lastName} {user.email}
    </div>
  ) : (
    <div>HOME</div>
  );
}
