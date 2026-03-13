type CopyPairProps = {
  en: React.ReactNode;
  zh: React.ReactNode;
};

export function CopyPair({ en, zh }: CopyPairProps) {
  return (
    <>
      <div className="lang lang-en">{en}</div>
      <div className="lang lang-zh">{zh}</div>
    </>
  );
}
