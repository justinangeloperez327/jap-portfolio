import { cn } from "@/lib/utils";

type SectionLabelProps = {
  number: string;
  label: string;
  className?: string;
};

export function SectionLabel({
  number,
  label,
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-label font-medium uppercase text-muted-foreground",
        className,
      )}
    >
      <span className="font-mono text-primary">{number}</span>
      <span aria-hidden="true" className="h-px w-7 bg-border" />
      <span>{label}</span>
    </div>
  );
}
