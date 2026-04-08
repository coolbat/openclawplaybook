import { CopyPair } from "@/components/content";
import type { LocalizedList } from "@/content/types";

export function ChecklistList({ items }: { items: LocalizedList }) {
  return (
    <CopyPair
      en={
        <ul className="list">
          {items.en.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      }
      zh={
        <ul className="list">
          {items.zh.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      }
    />
  );
}
