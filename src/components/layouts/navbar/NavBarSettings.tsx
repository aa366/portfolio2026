import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import { Settings } from "lucide-react";
import { ModeToggle } from "./trigger";
import SelectTheme from "./SelectTheme";
export default function NavBarSettings() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className=" ">
            <Settings className="size-6" />
          </Button>
        </DialogTrigger>
        <DialogContent
          className=" bg-primary-foreground"
          aria-describedby={"dialog-Settings"}>
          <DialogTitle>Settings</DialogTitle>

          <ModeToggle />
          <SelectTheme />

        </DialogContent>
      </Dialog>
    </>
  );
}
