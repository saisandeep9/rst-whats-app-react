import React from "react";

import axios from "axios";

const List = (props) => {
  //   const { items } = props;

  //   async componentDidMount() {

  //     let { data: items } = await axios.get("http://localhost:3900/api/states");
  //     console.log("list", items, data);
  //   }

  return (
    <div>
      <select name="states">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default List;
