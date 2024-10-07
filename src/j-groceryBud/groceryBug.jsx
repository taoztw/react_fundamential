import { useState } from "react";
import "./main.css";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(list);
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (list) => {
  localStorage.setItem("list", JSON.stringify(list));
};

const defaultList = getLocalStorage();

function GroceryBug() {
  const [items, setItems] = useState(defaultList);
  const [newItemName, setNewItemName] = useState("");

  const addItem = (itemname) => {
    const newItem = {
      id: nanoid(),
      name: itemname,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added successfully");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const delItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItemName) {
      toast.error("Please enter value");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };
  return (
    <div>
      <div className="section-center">
        <form onSubmit={handleSubmit}>
          <h4>Grocery Bud</h4>
          <div className="form-control">
            <input
              type="text"
              className="form-input"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
            />
            <button className="btn">Add Item</button>
          </div>
        </form>
        <Items
          items={items}
          //   addItem={addItem}
          editItem={editItem}
          delItem={delItem}
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Slide
      />
    </div>
  );
}

function Items({ items, editItem, delItem }) {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            {...item}
            // addItem={addItem}
            editItem={editItem}
            delItem={delItem}
          />
        );
      })}
    </div>
  );
}

function SingleItem({ id, name, completed, editItem, delItem }) {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
        }}
      >
        {name}
      </p>
      <button className="btn remove-btn" onClick={() => delItem(id)}>
        delete
      </button>
    </div>
  );
}

export default GroceryBug;
