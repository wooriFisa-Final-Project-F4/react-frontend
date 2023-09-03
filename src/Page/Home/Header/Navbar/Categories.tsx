import React, { useState } from "react";
import { Dashboard } from "@mui/icons-material";
import CategoryList from "./CategoryList";
import "./Categories.css";

export const Categories = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <div
      className="categories d_flex"
      onMouseEnter={() => setShowCategories(true)}
      onMouseLeave={() => {
        setShowCategories(false);
        setActiveTab(null);
      }}
    >
      <span className="fa-solid fa-border-all">
        {showCategories ? (
          <Dashboard className="header_icon" style={{ color: "#ccc" }} />
        ) : (
          <Dashboard className="header_icon" />
        )}
      </span>
      <h4>작품 </h4>
      {showCategories && (
        <div className="categoryLayout">
          <div className="topCategories">
            {CategoryList.map((category) => (
              <div
                key={category.title}
                onMouseEnter={() => setActiveTab(category.title)}
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
  );
};
