import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { PostTitle } from "../../components/post-title";
import { Head } from "../../components/head";

export const Studytips = () => {
  return (
    <div>
      <Head />
      <Header />
      <div className="bg-egg">
        <PostTitle
          src="/study.jpg"
          mainTitle="study tips"
          subTitle="for struggling students"
          alt="People working on laptops"
          date="8/10/22"
        />
        <div className="p-4 md:px-20">
          <div className="text-xl sm-text-lg font-serif text-gray-600 py-4">
            The art of studying - an art form I have practiced for many years.
            After hours of cramming and trying countless study tools, I created
            a list of five habits that improve my efficiency and help my
            learning last.
          </div>

          <div className="text-xl sm-text-lg font-serif text-gray-600 font-bold pt-4">
            1. Finding the right background noise
          </div>
          <div className="text-lg sm-text-md font-serif text-gray-600 pt-4">
            <div>
              One of the most important aspects of studying is your mindset.
              Much of your mindset is reliant on the level and type of
              background noise. Some people need loud noise to focus, while
              others require absolute silence. For me, I found that I work best
              when listening to background music. Not my favorite songs, but
              music that will not distract me from my work.
            </div>
            <div>
              My favorite tool to use is the YouTube channel &quot;The LoFi
              Girl&quot;.{" "}
            </div>
            <div className="flex p-4 w-1/2">
              <iframe
                className="grow"
                src="https://www.youtube.com/embed/jfKfPfyJRdk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="text-xl sm-text-lg font-serif text-gray-600 font-bold pt-10">
            2. Planning out my study sesh
          </div>
          <div className="flex lg:flex-row flex-col text-lg sm-text-md font-serif text-gray-600 pt-4">
            <div className="">
              Setting a plan for what I can reasonably accomplish within my
              study session is one of the biggest helps. My typical plan of
              attack is:
              <li className="p-2 pt-4">
                List all of my to-dos and number them in order of priority
              </li>
              <li className="p-2">Write down the time each to-do will take</li>
              <li className="p-2">
                Schedule out blocks of my day when I will accomplish certain
                tasks
              </li>
              <li className="p-2">
                Cross out tasks as I go and stick to the schedule!
              </li>
            </div>
            <img src="/agenda.jpg" className="w-1/2 px-4" />
          </div>

          <div className="text-xl sm-text-lg font-serif text-gray-600 font-bold pt-4">
            3. Taking breaks
          </div>
          <div className="text-lg sm-text-md font-serif text-gray-600 pt-4">
            <div>
              As important as it is to prioritize and have a study plan, taking
              time to have fun and relax is even more important! In my time at
              college, I&apos;ve faced burnout several times. Each time, the
              burnout was caused by an unbalanced routine. These are some of the
              tips I use to prevent this frustration:
              <li className="p-2 pt-4">
                For each 30 minutes you study, take a 5-10 minute break. Drink
                some water, have a snack, or watch a tiktok to refuel.
              </li>
              <li className="p-2">
                Set larger blocks of time aside for self care. To avoid burnout,
                it&apos;s important to maintain social life and have things to
                look forward to. Plan a night out, buy concert tickets, or
                schedule an event ahead of time to get through a tough week.
              </li>
              <li className="p-2">
                In between classes or work, make sure to get outside! It is
                tempting to coop up inside and grind out work, but getting
                outside for fresh air is one of the best ways to refresh your
                mind. Take a walk and unplug solo or with a friend!
              </li>
              <li className="p-2">
                Set boundaries for what you can accomplish. Even with all the
                planning in the world, if you take on too much it will cause
                burnout. For a long time, I was determined to work as hard as
                possible to accomplish my goals. Long nights of studying,
                breakdowns, and shutting myself in made me realize that working
                harder is not better. Now, I make sure to have a balanced work
                and school schedule and to take time for activities like working
                out, watching Netflix, or playing games.
              </li>
            </div>
          </div>

          <div className="text-xl sm-text-lg font-serif text-gray-600 font-bold pt-4">
            4. Creating a productive workspace
          </div>
          <div className="flex flex-col lg:flex-row text-lg sm-text-md font-serif text-gray-600 pt-4">
            <img src="/desk.jpg" className="sm:w-1/2 lg:w-1/3 px-4" />
            <div className="p-4">
              Ensuring that your workspace will fuel your studying and not be a
              distraction is pivotal to success. These are some tips I use to
              fuel my productivity.
              <li className="p-2 pt-4">
                Clean your desk or work area to remove all distractions.{" "}
              </li>
              <li className="p-2">
                Light a candle or fix the lighting to remove extra stress!
              </li>
              <li className="p-2">
                Get out of the house and explore new study spaces - coffee
                shops, libraries, and even local food joints can make a great
                replacement.
              </li>
              <li className="p-2">
                Make sure your study tools are in good shape. Having sharpened
                pencils, pens, highlighters, sticky notes, or whatever you use
                available will remove unnecessary pauses in focus.
              </li>
            </div>
          </div>
          <div className="text-xl sm-text-lg font-serif text-gray-600 font-bold pt-4">
            5. Finding a study buddy
          </div>
          <div className="text-lg sm-text-md font-serif text-gray-600 pt-4">
            <div>
              When all else fails, pairing up with a study buddy can help -
              especially when you&apos;re feeling tired or unmotivated. Whether
              your partner will work directly with you on a project or just
              study alongside you, having someone who will keep you on track is
              very helpful. Some things to look for in a good study buddy are:
              <li className="p-2 pt-4">
                A focused person. When studying with a chatty friend, you might
                not accomplish much. Find a person who you know can stay focused
                and will motivate you instead of distract you!
              </li>
              <li className="p-2">
                Someone who has a lot to do. If you try to study with someone
                who has finished their work, they may be unfocused or bored.
                Further, if they are playing games or doing something
                unproductive it could derail your study session.
              </li>
              <li className="p-2">
                A motivator! Find someone with energy who will make you excited
                to get your work done. If both of you are low on energy,
                consider taking a break and getting something sweet to fuel your
                mind.
              </li>
              <li className="p-2">
                Someone to brainstorm with. Bouncing ideas back and forth can be
                a great creative trick when you are stuck on a problem or in
                need of inspiration.
              </li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
