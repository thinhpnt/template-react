import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Kết hợp clsx + tailwind-merge để merge className gọn gàng
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
