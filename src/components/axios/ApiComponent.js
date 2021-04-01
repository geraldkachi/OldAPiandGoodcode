import React, { useState, useEffect } from "react";

const ApiComponent = () => {
  const [persons, setPersons] = useState([]);
  const [datas, setDatas] = useState([]);

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    ListoFPersons();
    // ListofCountries();
    // loadData();
  }, []);


  const ListoFPersons = async () => {
    await axios(`https://jsonplaceholder.typicode.com/posts/1?${match.params.id}`)
      .then((res) => setPersons(res.data))
      .catch((err) => console.error(err));
  };

};

export default ApiComponent;
