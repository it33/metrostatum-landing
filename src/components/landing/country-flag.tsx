import { cn } from "@/lib/utils";
import type { Country } from "@/data/customer-stories";

export function CountryFlag({
  country,
  className,
}: {
  country: Country;
  className?: string;
}) {
  const src = `${import.meta.env.BASE_URL}images/flags/${country.code}.svg`;
  return (
    <img
      src={src}
      alt=""
      title={country.name}
      width={20}
      height={14}
      className={cn(
        "inline-block h-3.5 w-5 shrink-0 rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(27,29,34,0.12)]",
        className,
      )}
    />
  );
}
