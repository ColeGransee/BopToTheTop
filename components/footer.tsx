export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        {/*<div className="flex justify-center space-x-6 md:order-2">*/}
        {/*  {navigation.map((item) => (*/}
        {/*    <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">*/}
        {/*      <span className="sr-only">{item.name}</span>*/}
        {/*      <item.icon className="h-6 w-6" aria-hidden="true" />*/}
        {/*    </a>*/}
        {/*  ))}*/}
        {/*</div>*/}
        {/*<div className="mt-8 md:mt-0 md:order-1">*/}
        <p className="text-center text-base text-gray-400">
          © 1999-2022 BOP LLC. All Rights Reserved
        </p>
        {/*</div>*/}
      </div>
    </footer>
  );
};
