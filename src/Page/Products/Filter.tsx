import React, { useState } from "react";
import Categories, {
  Category,
  Detail,
  LinkItem,
} from "../Home/Header/Navbar/CategoryList";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Collapse,
  IconButton,
  Slider,
} from "@mui/material";
import "./Filter.css";
const Filter: React.FC = () => {
  const [selectedMedium, setSelectedMedium] = useState<string>("모든 매체");
  const [selectedTheme, setSelectedTheme] = useState<string>("모든 테마");
  const [openDetails, setOpenDetails] = useState<string[]>([]); // 여러 세부사항들의 열림 상태를 배열로 관리합니다

  const toggleDetail = (type: string) => {
    if (openDetails.includes(type)) {
      setOpenDetails((prev) => prev.filter((item) => item !== type));
    } else {
      setOpenDetails((prev) => [...prev, type]);
    }
  };

  return (
    <div className="filter">
      {/* 매체 필터 */}
      <FormControl>
        <FormLabel id="medium-radio-group-label">
          <p className="form_label">매체</p>
        </FormLabel>
        <RadioGroup
          aria-labelledby="medium-radio-group-label"
          value={selectedMedium}
          onChange={(e) => setSelectedMedium(e.target.value)}
        >
          <FormControlLabel
            value="모든 매체"
            control={<Radio />}
            label="모든 매체"
          />
          {Categories.map((category: Category) => (
            <FormControlLabel
              key={category.title}
              value={category.title}
              control={<Radio />}
              label={category.title}
              className="category_title"
            />
          ))}
        </RadioGroup>
        <p className="form_label">가격</p>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          style={{ color: "black" }}
        />
      </FormControl>

      {Categories.filter(
        (category) => category.title === selectedMedium
      ).flatMap((category) =>
        category.details.map((detail: Detail) => (
          <div key={detail.type}>
            <FormLabel id={`${detail.type}-radio-group-label`}>
              <p className="form_label">
                <span>{detail.type}</span>
                <p>
                  <IconButton
                    onClick={() => toggleDetail(detail.type)}
                    style={{
                      transform: openDetails.includes(detail.type)
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </IconButton>
                </p>
              </p>
            </FormLabel>
            <Collapse in={openDetails.includes(detail.type)}>
              <RadioGroup
                aria-labelledby={`${detail.type}-radio-group-label`}
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
              >
                {detail.items.map((item: string | LinkItem) => (
                  <FormControlLabel
                    key={typeof item === "string" ? item : item.label}
                    value={typeof item === "string" ? item : item.label}
                    control={<Radio />}
                    label={typeof item === "string" ? item : item.label}
                  />
                ))}
              </RadioGroup>
            </Collapse>
          </div>
        ))
      )}
    </div>
  );
};
export default Filter;
