import { SearchOutlined, Dashboard } from "@mui/icons-material";

import { SearchBox } from "./SearchBox";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryList from "../Navbar/CategoryList";
import "../Navbar/Categories.css";

export const Search = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  // 윈도우 크기가 변경될 때마다 이벤트를 감지
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowCategories(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="search">
      <div className="container c_flex">
        <div className="mobile_nav">
          {showCategories ? (
            <Dashboard
              onClick={() => setShowCategories(!showCategories)}
              style={{ color: "#ccc" }}
            />
          ) : (
            <Dashboard onClick={() => setShowCategories(!showCategories)} />
          )}

          <SearchOutlined style={{ marginLeft: "10px" }} />
        </div>
        <div className="logo">
          <div className="c_flex">
            <img src="logo.png" alt="logo" />
            <Link to="/">
              <h1>Arte Moderni</h1>
            </Link>
          </div>
        </div>
        <SearchBox />
        {showCategories && (
          <div className="categoryLayout">
            <div className="topCategories">
              {CategoryList.map((category) => (
                <div
                  key={category.title}
                  onClick={() => setActiveTab(category.title)}
                  className={activeTab === category.title ? "activeTab" : ""}
                >
                  <p>{category.title}</p>
                </div>
              ))}
            </div>
            {activeTab && (
              <div className="subCategories">
                {CategoryList.map(
                  (category) =>
                    category.title === activeTab &&
                    category.details.map((detail) => (
                      <div key={detail.type}>
                        <h5>{detail.type}</h5>
                        <div>
                          {detail.items?.map((item) => {
                            if (typeof item === "string") {
                              return <span key={item}>{item}</span>;
                            } else {
                              return (
                                <a key={item.label} href={item.link}>
                                  {item.label}
                                </a>
                              );
                            }
                          })}
                        </div>
                      </div>
                    ))
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
