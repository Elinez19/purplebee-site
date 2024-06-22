import { Metadata } from "next";
import Hero from "@/components/Hero";


export const metadata: Metadata = {
  title: "PurpleBeeTech- Custom Software & App Development Company",
  description: `Custom Software
Development Services.
Empower your business to soar beyond expectations with our tailor-made
custom software solutions, capable of unleashing innovation.
`,
  // other metadata
};
const Home = () => {
  return (
    <main>
      <Hero />
    </main>
  )
}

export default Home;