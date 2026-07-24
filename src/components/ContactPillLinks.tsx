export type ContactPillLink = {
  label: string;
  href: string;
  ariaLabel: string;
  openInNewTab?: boolean;
};

type ContactPillLinksProps = {
  links: ContactPillLink[];
  desktopVariant?: "default" | "compact";
  mobileVariant?: "default" | "large";
};

const baseLinkClasses =
  "flex items-center justify-between overflow-hidden whitespace-nowrap rounded-full border border-black font-normal leading-none tracking-tight text-black transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

const defaultMobileClasses =
  "w-20 py-px pl-1.5 pr-px text-[6px] hover:w-[5.5rem] focus-visible:w-[5.5rem]";

const largeMobileClasses =
  "w-[8.5rem] py-1 pl-3 pr-1 text-[9px] hover:w-[10rem] focus-visible:w-[10rem]";

const defaultDesktopClasses =
  "lg:w-[13rem] lg:py-1.5 lg:pl-4 lg:pr-1 lg:text-sm lg:hover:w-[15rem] lg:focus-visible:w-[15rem]";

const compactDesktopClasses =
  "lg:w-[9.5rem] lg:py-1 lg:pl-3 lg:text-xs lg:hover:w-[11rem] lg:focus-visible:w-[11rem]";

export default function ContactPillLinks({
  links,
  desktopVariant = "default",
  mobileVariant = "default",
}: ContactPillLinksProps) {
  const mobileClasses =
    mobileVariant === "large" ? largeMobileClasses : defaultMobileClasses;

  const desktopClasses =
    desktopVariant === "compact"
      ? compactDesktopClasses
      : defaultDesktopClasses;

  const circleMobileClasses = mobileVariant === "large" ? "size-5" : "size-3";
  const arrowMobileClasses =
    mobileVariant === "large" ? "size-3" : "size-1.5";

  const circleDesktopClasses =
    desktopVariant === "compact" ? "lg:size-5" : "lg:size-6";
  const arrowDesktopClasses =
    desktopVariant === "compact" ? "lg:size-3" : "lg:size-3.5";

  return links.map((link) => (
    <a
      key={`${link.label}-${link.href}`}
      href={link.href}
      aria-label={link.ariaLabel}
      target={link.openInNewTab ? "_blank" : undefined}
      rel={link.openInNewTab ? "noopener noreferrer" : undefined}
      className={`${baseLinkClasses} ${mobileClasses} ${desktopClasses}`}
    >
      <span>{link.label}</span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full border border-current lg:mr-0.5 ${circleMobileClasses} ${circleDesktopClasses}`}
      >
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className={`${arrowMobileClasses} ${arrowDesktopClasses}`}
          fill="none"
        >
          <path
            d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  ));
}
