import { useState } from "react";
import "./main.css";
import { useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function Tabs() {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const url = "https://www.course-api.com/react-tabs-project";

  const fetchjobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchjobs();
  }, []);

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((job, order) => {
          return (
            <button
              key={order}
              className={`job-btn ${order === currentItem && "active-btn"}`}
              onClick={() => setCurrentItem(order)}
            >
              {job.company}
            </button>
          );
        })}
      </div>

      {jobs && jobs.length > 0 && (
        <div>
          <h3>{jobs[currentItem].title}</h3>
          <p className="job-company">{jobs[currentItem].company}</p>
          <p className="job-date">{jobs[currentItem].dates}</p>

          {jobs[currentItem].duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Tabs;
