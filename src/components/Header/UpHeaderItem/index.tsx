import { useEffect, useState } from "react";
import { upHeaderTopics as fakeDownHeaderTopics } from "../../../data";
import { Link } from "react-router-dom";

export type UpHeaderTopic = {
  img: string;
  content: string;
};

export const UpHeaderSection: React.FC = () => {
  const [upHeaderTopics, setUpHeaderTopic] = useState<UpHeaderTopic[]>([]);

  useEffect(() => {
    setUpHeaderTopic(fakeDownHeaderTopics);
  }, []);

  return (
    <div className="list_nav">
      {upHeaderTopics.map((topic) => (
        <div className="list_nav__content">
          <img src={topic.img} alt="" />
          <a href="#">{topic.content}</a>
        </div>
      ))}
    </div>
  );
};
