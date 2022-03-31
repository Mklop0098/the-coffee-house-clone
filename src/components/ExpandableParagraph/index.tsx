import { useState } from "react";
import { Fade } from "react-bootstrap";
import "./style.css";

export type ParagraphProps = {
  paragraphs?: string[];
  height?: string;
};

export const ExpandableParagraph: React.FC<ParagraphProps> = (props) => {
  const { height = "38%", paragraphs } = props;

  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className="para-container">
      <div
        style={
          !isExpand
            ? {
                height: height,
              }
            : {}
        }
        className={isExpand ? "" : "para-short"}
      >
        {paragraphs?.map((para) => (
          <p>{para}</p>
        ))}
      </div>
      <div className="show" onClick={() => setIsExpand(!isExpand)}>
        {isExpand ? "Ẩn bớt" : "Xem thêm"}
      </div>
    </div>
  );
};
