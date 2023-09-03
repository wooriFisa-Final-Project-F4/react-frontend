import { Head } from "./Head/Head";
import { Navbar } from "./Navbar/Navbar";
import { Search } from "./Search/Search";
import "./Header.css";
export const Header = () => {
  return (
    <>
      <Head />
      <Search />
      <Navbar />
    </>
  );
};
