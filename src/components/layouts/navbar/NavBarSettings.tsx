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

          <div className="flex justify-between items-center">
            <label htmlFor="BrightnessPicker">Mode</label>
            <ModeToggle />
          </div>
          <div className="flex justify-between items-center" >
            <label htmlFor="MainColorPicker">Main Color</label>
            <SelectTheme />
          </div>


        </DialogContent>
      </Dialog>
    </>
  );
}
