import { useState } from "react";
import datas from "./datas.json";

const Data = () => {
  const [nData, setnData] = useState(datas);

  const handlermv = (itemId) => {
    setnData(nData.filter((item) => item.id !== itemId));
  };
  const handleUdt = (itemId) => {
    setnData(
      nData.map((items) => {
        if (items.id === itemId) {
          return { name: "Updated" };
        } else {
          return items;
        }
      })
    );
  };

  return (
    <div className="data">
      <ul>
        {nData.map((items) => (
          <li key={items.id}>
            {items.name}
            <br />
            <button onClick={() => handleUdt(items.id)}>Udt</button>
            <button onClick={() => handlermv(items.id)}>Rmv</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setnData([])}>Clr</button>
    </div>
  );
};

export default Data;
