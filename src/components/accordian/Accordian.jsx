import React, { useCallback, useState } from "react";
import "./Accordian.css";
import data from "../../data";

// single selection
// multiple selection

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiId, setMultiId] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id == selected ? null : id);
  };
  const handleMultiSelection = (id) => {
    const getId = multiId.indexOf(id);
    if (getId === -1) {
      setMultiId((prev) => [...prev, id]);
    } else {
      let updated = multiId.filter((item) => item !== id);
      setMultiId(updated);
    }
  };
  console.log(multiId);

  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelection((prev) => !prev)}>
        Enable Multiple Selection {`${multiSelection}`}
      </button>
      <div className="accordian">
        {data.length == 0 && <div>No data found</div>}
        {data.length > 0 &&
          data.map((item) => (
            <div className="item" id={item.id}>
              {" "}
              <div
                className="title"
                key={item.id}
                onClick={
                  multiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <h3>{item.title}</h3>
                <span>+</span>
              </div>
              <div className="content">
                {!multiSelection && selected == item.id && item.content}
                {multiSelection && multiId.includes(item.id) && item.content}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accordian;
