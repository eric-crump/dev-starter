import Header from "@/components/header";
import Hero from "@/components/hero";
import ImageGrid from "@/components/imageGrid";
import TextBlock from "@/components/textBlock";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Header />
        <Hero />

        <TextBlock />
        <ImageGrid />
    </div>
  );
}
