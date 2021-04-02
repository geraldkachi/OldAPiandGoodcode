import React, { useState, useEffect } from "react";
import axios from "axios"

const ApiComponent = () => {
  const [persons, setPersons] = useState([]);
  // const [datas, setDatas] = useState([]);

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    ListoFPersons();
    // ListofCountries();
    // loadData();
  }, []);


  const ListoFPersons = async () => {
    await axios(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => setPersons(res.data))
      .catch((err) => console.error(err));
  };
  return (
    <div className="text-center">
      <h2>List of Post</h2>
      {persons.map(item => (
        <div key={item.id}>{item.title} - {item.body}</div>
      ))}
    </div>
  )

};

export default ApiComponent;
