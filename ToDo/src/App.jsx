import { useState } from "react";
import Delete from "./Delete";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

function App() {
  const [itemlist, setitemlist] = useState([]);

  const [curritem, setcurritem] = useState("");

  const addInNewList = () => {
    const task = {
      id: itemlist.length === 0 ? 1 : itemlist[itemlist.length - 1].id + 1,
      taskname: curritem,
    };
    setitemlist([...itemlist, task]);
    setcurritem("");
  };

  const delItem = (id) => {
    const del = itemlist.filter((name) => name.id !== id);
    setitemlist(del);
  };

  const addOnChange = (event) => {
    setcurritem(event.target.value);
  };
  return (
    <>
      <center>
        <div>
          <h1>To-Do List</h1>
          {/* <input type="text" onChange={addOnChange} title="itemname" /> */}

          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder=""
            variant="filled"
            onChange={addOnChange}
            value={curritem}
          />

          <Fab color="primary" aria-label="add">
            <AddIcon onClick={addInNewList} />
          </Fab>
          <div>
            {itemlist.map((task) => {
              return (
                <Delete
                  taskname={task.taskname}
                  id={task.id}
                  delItem={delItem}
                />
              );
            })}
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
