import React, { Fragment } from "react";
import "./Form.css";
import List from "./List/List";
import Search from "./Search/Search";
import Map from "./Map/Map";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Form = ({  }) => {
//   const contactItem = ContactList.map(item => {
//     return (
//       <ContactItem
//         key={item.id}
//         name={item.name}
//         description={item.description}
//         avatar={item.avatar}
//         facebook={item.facebook}
//         twitter={item.twitter}
//         gender={item.gender}
//         favorite={item.favorite}
//         onStarPress={() => onStarPress(item.id)}
//         onDelete={() => onDelete(item.id)}
//         onEditContact={() =>onEditContact(item.id)}
//       />
//     );
//   });

  return (
    <Fragment>
      <Search></Search>
      {/* {List} */}
      <List></List>
      <Map></Map>
    </Fragment>
  );
};

export default Form;