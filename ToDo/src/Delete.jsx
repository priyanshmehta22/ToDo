import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

const Delete = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.taskname}</h1>
      <Tooltip title="Delete">
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => {
            props.delItem(props.id);
          }}
        >
          DELETE
        </Button>
      </Tooltip>
    </div>
  );
};

export default Delete;
