interface PageLayoutProps {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

export default function PageLayout({
  header,
  content,
  footer,
}: PageLayoutProps) {
  return (
    <main className="flex flex-col h-screen justify-between">
      {/* Title */}
      <section>{header}</section>

      {/* Center */}
      <section className="overflow-auto m-2 ">{content}</section>

      {/* Fixed Footer */}
      <footer>{footer}</footer>
    </main>
  );
}
