import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string, resolving Tailwind CSS conflicts.
 *
 * @param inputs - Any number of class name inputs (strings, objects, arrays, etc.)
 * @returns A merged string of class names with Tailwind conflicts resolved
 *
 * Example:
 * cn("text-red-500", "bg-blue-500", isActive && "font-bold")
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number as a currency string.
 *
 * @param value - The number to format
 * @param currency - The currency code (default: 'USD')
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @returns A formatted currency string
 */
export function formatCurrency(value: number, currency = "USD", locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value)
}

/**
 * Truncates a string to a specified length and adds an ellipsis if truncated.
 *
 * @param str - The string to truncate
 * @param length - Maximum length before truncation
 * @returns The truncated string
 */
export function truncate(str: string, length: number): string {
  if (!str || str.length <= length) return str
  return `${str.slice(0, length)}...`
}

/**
 * Generates a random string ID.
 *
 * @param length - The length of the ID (default: 8)
 * @returns A random string ID
 */
export function generateId(length = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length)
}

/**
 * Debounces a function call.
 *
 * @param fn - The function to debounce
 * @param delay - The delay in milliseconds
 * @returns A debounced function
 */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return function (this: any, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
