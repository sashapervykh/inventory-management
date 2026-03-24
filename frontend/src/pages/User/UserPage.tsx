import { ContactModalProvider } from "../../widgets/UserInventories/model/providers/modal.provider";
import { UserInventories } from "../../widgets/UserInventories/ui/UserInventories";

export function UserPage() {
  return (
    <ContactModalProvider>
      <UserInventories />
    </ContactModalProvider>
  );
}
