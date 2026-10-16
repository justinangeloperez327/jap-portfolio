import { cn } from "@/lib/utils";
type SectionLabelProps = { number: string; label: string; className?: string };
export function SectionLabel({ label, className }: SectionLabelProps) {
  return <div className={cn("flex items-center gap-3 font-mono text-xs font-medium text-muted-foreground", className)}><span aria-hidden="true" className="h-4 w-1 rounded-full bg-primary" /><span>{label}</span></div>;
}
