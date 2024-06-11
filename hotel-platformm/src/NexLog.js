import React, { useEffect, useState } from "react";
import sanityAPI from "./sanitySetup";

function NexLog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "page"]';
    const subscription = sanityAPI.listen(query).subscribe((update) => {
      const { documentId, result, transition } = update;

      setData((prevData) => {
        let newData;

        if (transition === "appear" || transition === "update") {
          newData = prevData.map((item) =>
            item._id === documentId ? result : item
          );
          // If it's a new item, add it to the array
          if (!prevData.some((item) => item._id === documentId)) {
            newData.push(result);
          }
        } else if (transition === "disappear") {
          newData = prevData.filter((item) => item._id !== documentId);
        } else {
          newData = prevData;
        }

        return newData;
      });
    });

    // Fetch initial data
    sanityAPI.fetch(query).then((initialData) => {
      setData(initialData);
    });

    // Clean up the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Nex Log</h1>
      <ul>
        {data.map((i) => (
          <li key={i._id}>
            {i.title} - {i.points}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NexLog;
