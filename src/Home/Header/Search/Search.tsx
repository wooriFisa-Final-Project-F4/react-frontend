import { SearchBox } from "./SearchBox";

export const Search = () => {
  return (
    <section className="search">
      <div className="container c_flex">
        <div className="logo width">
          <div className="c_flex">
            <div className="c_flex">
              <img src="logo.png" alt="logo" />
              <h1>Arte Moderni</h1>
            </div>
          </div>
        </div>
        <SearchBox />
      </div>
    </section>
  );
};
