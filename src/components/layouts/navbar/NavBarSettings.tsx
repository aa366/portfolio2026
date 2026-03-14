import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import { Settings } from "lucide-react";
import { ModeToggle } from "./trigger";
export default function NavBarSettings() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Settings className="size-6" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Settings</DialogTitle>

          <ModeToggle />

          <div>sdas</div>
        </DialogContent>
      </Dialog>
    </>
  );
}
