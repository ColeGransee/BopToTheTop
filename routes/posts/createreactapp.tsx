import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { PostTitle } from "../../components/post-title";
import { Head } from "../../components/head";

export const CreateReactApp = () => {
  return (
    <div>
      <Head />
      <Header />
      <div className="bg-egg">
        <PostTitle
          src="/react.jpg"
          mainTitle="create react app"
          subTitle="for beginners"
          alt="People working on laptops"
          date="8/21/22"
        />
        <div className="p-4 md:px-20">
          <div className="text-xl sm-text-lg font-serif text-gray-600 py-4">
            Creating your first app can be very intimidating! When I began
            coding, I would get too overwhelmed with the process of setting up
            my project that I would never get very far. If you can relate, or
            could simply use some help with React, this article is for you!
          </div>

          <div className="text-xl sm-text-lg font-serif text-gray-600 font-bold pt-4">
            Why React?
          </div>
          <div className="text-xl sm-text-md font-serif text-gray-600 pt-4">
            <div>
              Before we jump into the logistics of setting up your app, I think
              it&apos;s important to know <em>why</em> React is a good tool.
            </div>
            <div className="pt-2">
              React applications are commonly built using the Next.js framework,
              which offers features including server-side rendering, easy
              production builds and automatic code-splitting.
            </div>
            <div className="pt-2">
              This tutorial will demonstrate how to bootstrap a Next.js web
              application and add some flair to your webpage. You got this!
            </div>
            <div className="pt-2">
              <div className="text-xl sm-text-lg font-serif text-gray-600 font-bold pt-10">
                Set Up
              </div>
              <div className="text-xl sm-text-md font-serif text-gray-600 pt-4">
                Before you get going, you must install Node.js on your device.
                Head to their official download page and choose the correct
                installer.
                <li className="p-2 pt-4">
                  Visit the{" "}
                  <a
                    href="https://nodejs.org/en/download/"
                    target="_blank"
                    className="text-dustypink"
                    rel="noreferrer"
                  >
                    Node.js
                  </a>{" "}
                  page to install
                </li>
              </div>
            </div>
          </div>

          <div className="text-xl sm-text-lg font-serif text-gray-600 font-bold pt-10">
            Step 1: Bootstrap your Next.js App
          </div>
          <div className="text-xl sm-text-md font-serif text-gray-600 pt-4">
            <div className="">
              Open a new terminal window and run the create-next-app command
              <div className="pt-2">
                I recommend using Typescript in your project, as it allows for
                interfacing and static type checking. For these reasons, I
                include the <em>--typescript</em> flag in the command below.
              </div>
            </div>
            <div className="bg-gray-300 grid justify-center lg:w-1/2 rounded m-4 p-2">
              <div className="flex flex-col rounded font-mono text-lg">
                <div className="py-2"> npx create-next-app@latest --ts</div>
                <div className="py-2"># or</div>
                <div className="py-2">yarn create next-app --typescript</div>
              </div>
            </div>
            <div className="pt-2">
              After the command runs, enter the project name. Then, cd into the
              project and start the development server as shown below:
            </div>
            <div className="bg-gray-300 grid justify-center lg:w-1/2 rounded m-4 p-2">
              <div className="flex flex-col font-mono rounded text-lg">
                <div className="py-2">
                  {" "}
                  cd <em>project-name</em>
                </div>
                <div className="py-2"> npm run dev</div>
                <div className="py-2"># or</div>
                <div className="py-2">yarn dev</div>
              </div>
            </div>
            <div>
              Finally, open a new tab in your browser and head to{" "}
              <a
                href="http://localhost:3000"
                target="_blank"
                className="text-dustypink"
                rel="noreferrer"
              >
                http://localhost:3000
              </a>
              .
            </div>
            <div className="pt-2">
              You should see “Welcome to Next.js!” displayed on your screen.
            </div>
          </div>

          <div className="text-xl sm-text-lg font-serif text-gray-600 font-bold pt-10">
            Step 2: Set Up TailwindCSS
          </div>
          <div className="text-xl sm-text-md font-serif text-gray-600 pt-4">
            <div>
              With utility classes, Tailwind simplifies the process of writing
              CSS while allowing for elegant styling.
            </div>
            <div className="py-2">
              First, install Tailwind and its peer dependencies. Then, run the
              second command below to generate the
              &quot;tailwind.config.js&quot; and &quot;postcss.config.js&quot;
              files.
            </div>
            <div className="bg-gray-300 grid justify-center lg:w-1/2 rounded m-4 p-2">
              <div className="flex flex-col font-mono text-lg rounded">
                <div className="py-2">
                  {" "}
                  cd <em>project-name</em>
                </div>
                <div className="pb-2 pt-6">
                  npm install -D tailwindcss postcss autoprefixer
                </div>
                <div className="py-2"># or</div>
                <div className="py-2">
                  yarn add -D tailwindcss postcss autoprefixer
                </div>
                <div className="py-6">npx tailwindcss init -p</div>
              </div>
            </div>
            <div className="py-2">
              Next, configure your template paths in the{" "}
              <em>&apos;tailwind.config.js&apos;</em> file. This determines
              which files the Tailwind will affect, so make sure any paths that
              you want to stylize are included!
            </div>
            <div className="bg-gray-300 grid justify-center lg:w-1/2 rounded m-4 p-2">
              <div className="flex flex-col font-mono text-lg rounded overflow-hidden">
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <div>
                  /** @type &#123;import(&apos;tailwindcss&apos;).Config&#125;
                  */
                </div>
                <div>module.exports = &#123;</div>
                <div className="md:pl-3"> content: [</div>
                <div className="md:pl-5 text-dustypink">
                  {" "}
                  ./src/**/*.&#123;js,jsx,ts,tsx&#125;,
                </div>
                <div className="md:pl-3"> ],</div>
                <div className="md:pl-3"> theme: &#123;</div>
                <div className="md:pl-5"> extend: &#123;&#125;,</div>
                <div className="md:pl-3"> &#125;,</div>
                <div className="md:pl-3"> plugins: [],</div>
                <div>&#125;</div>
              </div>
            </div>
            <div className="py-2">
              Lastly, add the Tailwind directives to your{" "}
              <em>&apos;index.css&apos;</em> file.
            </div>
            <div className="bg-gray-300 grid justify-center lg:w-1/2 rounded m-4 p-2">
              <div className="flex flex-col font-mono text-lg rounded">
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <div className="py-2">@tailwind base;</div>
                <div className="py-2">@tailwind components;</div>
                <div className="py-2">@tailwind utilities;</div>
              </div>
            </div>
            <div className="pt-2">You are now ready to use TailwindCSS!</div>
          </div>

          <div className="text-xl sm-text-lg font-serif text-gray-600 font-bold pt-10">
            Step 3: Learn about the <b>/pages</b> directory
          </div>
          <div className="text-xl sm-text-md font-serif text-gray-600 pt-4">
            <div>
              The <b>/pages</b> directory will be home to all of the pages for
              your website. The <b>index.js</b> file will be the home page of
              your website by default. When organizing your files, create a{" "}
              <b>/routes</b> directory. This directory will mirror the pages
              directory, and will contain the code for your components and
              webpages. However you organize your
              <b>/routes</b> directory, be sure that your <b>/pages</b>{" "}
              directory is in the exact same layout for each file that you wish
              to be a page on your website In other words, components that you
              put in your <b>/routes</b> directory that are not in your{" "}
              <b>/pages</b> directory will not be available as a route on your
              website. This is useful for creating components that do not have
              their own page, and also for general organization of your website.
            </div>
            <div className="py-2">
              For instance, a basic layout would have a <b>/pages</b> and{" "}
              <b>/routes</b> directory as follows:
            </div>
          </div>
          <div className="flex flex-col lg:flex-row text-xl sm-text-md font-serif text-gray-600 pt-4"></div>

          <div className="text-xl sm-text-lg font-serif text-gray-600 font-bold pt-10">
            Step 4: Try it out!
          </div>
          <div className="flex flex-col lg:flex-row text-xl sm-text-md font-serif text-gray-600 pt-4"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
