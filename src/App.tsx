import React, { useEffect, useState } from "react";
import { useLiveData } from "./customHook/liveData";
import DataItem from "./interface/data";

const App: React.FC = () => {
  const data = useLiveData();
  const [dataArray, setDataArray] = useState<DataItem[]>([]);
  const [nameChanged, setnameChanged] = useState(false);

  useEffect(() => {
    if (data) {
      const idExist = dataArray.some((item) => item.id === data.id);
      const existingItemIndex = dataArray.findIndex(
        (item) => item.id === data.id
      );
      if (!idExist) {
        setDataArray((prevData) => [...prevData, data]);
      } else {
        dataArray[existingItemIndex].name = data.name;
        dataArray[existingItemIndex].lastName = data.lastName;
      }
    }
  }, [dataArray, data]);

  return (
    <div>
      <h1>Home Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
