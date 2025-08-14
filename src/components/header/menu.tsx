"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";

import { menuItems } from "./nav-data";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockMenu() {
  return (
    <div className="relative">
      <Dock direction="middle" className="h-14">
        {menuItems.map((item) => (
          <DockIcon key={item.title}>
            <Link
              href={item.href ?? ""}
              title={item.title}
              legacyBehavior
              passHref
            >
              <div className="min-w-10 text-lg">{item.title}</div>
            </Link>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
