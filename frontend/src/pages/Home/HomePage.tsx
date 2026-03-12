import { LatestInventories } from "../../widgets/LatestInventories/ui/LatestInventories";
import { PopularInventories } from "../../widgets/PopularInventories/ui/PopularInventories";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <PopularInventories />
      <LatestInventories />
    </div>
  );
}
