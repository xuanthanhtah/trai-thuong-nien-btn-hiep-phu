import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Plane } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TransferInfo from "./TransferInfo";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "py-4 bg-background/80 backdrop-blur-lg shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="font-display text-xl font-bold text-foreground flex items-center gap-2"
          >
            <span>
              <span className="text-primary">UNBOX</span> - MỞ LÒNG
            </span>
          </a>

          <div className="flex items-center space-x-1">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <button className="ml-4 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors w-[100%]">
                  Thông tin chuyển khoản
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Thông tin chuyển khoản</DialogTitle>
                  <DialogDescription>
                    Vui lòng chuyển khoản vào tài khoản bên dưới để đóng tiền đi
                    trại
                  </DialogDescription>
                </DialogHeader>
                <TransferInfo onClose={() => setDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
