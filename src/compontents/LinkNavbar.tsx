import React, { PropsWithChildren } from "react";

export default function LinkNavbar({ children }: PropsWithChildren) {
  return (
    <a className="open-active_a" href="#">
      {children}
    </a>
  );
}
