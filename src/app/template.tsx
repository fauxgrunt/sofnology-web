import PageTransition from "@/components/PageTransition";

/**
 * Remounts on navigation — pairs with NavigationProgress for a soft land
 * while the sticky header visually stays in place (same chrome, new content).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
