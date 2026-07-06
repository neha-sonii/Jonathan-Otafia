"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { cn } from "./utils";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  disabled,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const mergedDisabled = React.useMemo(() => {
    const base = [{ dayOfWeek: [0, 6] }];
    if (!disabled) return base;
    if (Array.isArray(disabled)) return [...base, ...disabled];
    return [...base, disabled];
  }, [disabled]);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      disabled={mergedDisabled}
      mode="single"
      className={cn("p-3", className)}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4", className)} {...props} />
        ),
      }}
      classNames={classNames}
      {...props}
    />
  );
}

export { Calendar };
