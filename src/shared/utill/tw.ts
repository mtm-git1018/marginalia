/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function tw(...input: any[]) {
  return twMerge(clsx(input))
}