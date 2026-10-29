import Image from "next/image";

// "Desarrollado por Fullkod" (CREA0004): el mismo crédito en todas las pantallas.
export function FullkodCredit({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://fullkod.com/?ref=follow-it"
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 ${className}`}
    >
      Desarrollado por
      <Image src="/brand/fullkod-symbol.svg" alt="" width={14} height={14} />
      <span className="font-semibold text-gray-700">Fullkod</span>
    </a>
  );
}
