import React, { useState, useEffect } from "react";

const FetchComponets = () => {

    const [datas, setDatas] = useState([]);
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        // loadData();
        getData()
      }, []);
    

 //  fetch
//  const loadData = async () => {
//     await fecth("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((err) => console.log(err));
//   };


//   const loadDataList = datas.length ? (
//     todos.map((todo) => (
//       <div key={todo.id} className="list-group text-center"></div>
//     ))
//   ) : (
//     <div>loading todos here...</div>
//   );

// //////////////////////////////////////////


const getData = async () => {
    const api = `https://jsonplaceholder.typicode.com/user`;
    const result = await fetch(api)
    const getResult = result.json()
    setDatas(getResult)
    console.log(getResult)
}

  const getDataList = datas.length ? (
      datas.map(user, index => (
          <div key={index}>{user.name}</div>
      ))
  ) : (<p>loading users</p>)

//   ////////////////////////////////////


  return (
    <div className="text-center">
      <h1>List fo Load Data</h1>
      {/* {loadDataList} */}
      {getDataList}
    </div>
  )
}

export default FetchComponets
