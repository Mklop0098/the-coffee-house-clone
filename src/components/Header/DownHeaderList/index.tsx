import { useEffect, useState } from "react";
import { downHeaderTopics as fakeDownHeaderTopics } from "../../../data";
import { Link } from "react-router-dom";

export type DownHeaderTopic = {
  id: string;
  title: string;
  link: string;
};

export const DownHeaderSection: React.FC = () => {
  const [downheaderTopics, setDownHeaderTopics] = useState<DownHeaderTopic[]>(
    []
  );

  useEffect(() => {
    setDownHeaderTopics(fakeDownHeaderTopics);
  }, []);

  const [isNav, setIsNav] = useState(false);

  const handleClick = () => {
    if (isNav === false) {
      setIsNav(true);
    } else setIsNav(false);
  };

  return (
    <section>
      <div className="menu-icon" onClick={handleClick}>
        <i className="ti-menu"></i>
      </div>
      <div id={isNav ? "down-header-item-b" : "down-header-item-a"}>
        {downheaderTopics.map((topic) => (
          <div className="down-header-topic">
            <Link to={topic.link}>
              <h4 key={topic.id}>{topic.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
