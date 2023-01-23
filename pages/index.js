import { Hero, Page, Category, TopSelling } from "@/components";

export default function Home() {
  return (
    <Page className={"relative w-full"}>
      <img
        src="/assets/wavy-bg.svg"
        alt="just a wave"
        className="absolute top-0 right-0"
      />
      <div className="space-y-[3rem]">
        <Hero />
        <Category />
        <TopSelling />
      </div>
    </Page>
  );
}
