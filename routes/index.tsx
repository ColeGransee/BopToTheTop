import { Header } from "../components/header";
import { Head } from "../components/head";
import { Footer } from "../components/footer";
import { Card } from "../components/card";

export const IndexPage = () => {
  return (
    <div>
      <Head />
      <Header />
      <div className="bg-egg p-4 md:px-8 pb-8">
        <div className="bg-offwhite justify-center rounded">
          <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <Card
              title="5 Quick Tips for Improving Your Studying"
              imageUrl="./study.jpg"
              category={{ name: "Article", href: "#" }}
              href="/posts/studytips"
              description="Feeling distracted? Procrastinating your work? Try these simple study hacks!"
              datetime="12:03 PM"
              date="08/10/2022"
            />
            <Card
              title="How to Create a React App using Next.js and Tailwind CSS"
              imageUrl="./react.jpg"
              category={{ name: "Article", href: "#" }}
              href="/posts/createreactapp"
              description="Want to get started with React but don't know how? Follow this simple tutorial to begin your project!"
              datetime="8:10 AM"
              date="08/21/2022"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
