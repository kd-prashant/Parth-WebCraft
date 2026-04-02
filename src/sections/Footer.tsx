import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "GitHub",
    href: "https://github.com/kd-prashant",
  },
  {
    title: "LeetCode",
    href: "https://leetcode.com/kd-prashant/",
  },
  {
    title: "CodeChef",
    href: "https://www.codechef.com/users/eyem_parth/",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/prashant-kandpal-1b4375282",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/eyem_parth",
  },
  {
    title: "X",
    href: "https://twitter.com/eyem_parth",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; 2026. All rights reserved.
          </div>
          <nav className="flex flex-wrap justify-center md:flex-row items-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition duration-300"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
