import { Hero, Page } from "@/components";

export default function Home() {
  return (
    <Page className={"relative w-full"}>
      <img
        src="/assets/wavy-bg.svg"
        alt="just a wave"
        className="absolute top-0 right-0"
      />
      <div className="max-w-6xl mx-auto">
        <Hero />
      </div>
    </Page>
  );
}
