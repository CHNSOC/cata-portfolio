import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-100 md:border-b-2 md:border-gray-500" : ""}
    transition duration-1000 hover:text-primary-200 ease-in-out text-lg
    `}
      onClick={() => {
        setSelectedPage(lowerCasePage);
      }}
      href={`#${lowerCasePage}`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
