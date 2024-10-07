import { memo, useState, useCallback } from "react";
import { data } from "./data";

function Performance() {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(data);

  // 这个函数每次都会重新渲染，因为每次都会创建一个新的函数，所以对于子组件的props来说，每次都是新的，所以子组件也会重新渲染
  // 通过使用useCallback可以解决这个问题
  // function removePerson(id) {
  //   setPeople((people) => {
  //     return people.filter((person) => person.id !== id);
  //   });
  // }

  const removePerson = useCallback(
    (id) => {
      setPeople((people) => {
        return people.filter((person) => person.id !== id);
      });
    },
    [people]
  );
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <h2>List</h2>
      <List people={people} removePerson={removePerson} />
    </div>
  );
}

const List = memo(function List({ people, removePerson }) {
  return (
    <ul>
      {people.map((person) => {
        return (
          <People
            key={person.id}
            name={person.name}
            id={person.id}
            removePerson={removePerson}
          ></People>
        );
      })}
    </ul>
  );
});

function People({ name, removePerson, id }) {
  // console.log("render");
  return (
    <div style={{ display: "flex" }}>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
}

export default Performance;
