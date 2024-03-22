import {
  Card,
  TextField,
  Unstable_Grid2 as Grid2,
  Autocomplete,
  Button,
  Chip,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

import styles from "./TodoForm.module.scss";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import dayjs from "dayjs";

const options = [
  { label: "GUI", value: 0 },
  { label: "Personal", value: 1 },
];

const TodoForm = () => {
  const [description, setDescription] = useState<string>();
  const [labels, setLabels] = useState<{ label: string; value: number }[]>([]);

  const handleForm = () => {
    console.log(description);
    console.log(labels);
  };

  return (
    <Card className={styles.form}>
      <Grid2 container direction={"row"} gap={2}>
        <Grid2 md={7.51}>
          <TextField
            fullWidth
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid2>
        <Grid2 md={2}>
          <Autocomplete
            multiple
            size="medium"
            options={options}
            value={labels}
            onChange={(e, newValue) => setLabels(newValue)}
            renderInput={(params) => <TextField {...params} label="Labels" />}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.value}>
                  {option.label}
                </li>
              );
            }}
            renderTags={(tagValue, getTagProps) => {
              return tagValue.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={option.value}
                  label={option.label}
                />
              ));
            }}
          />
        </Grid2>
        <Grid2 md={1.5}>
          <DatePicker
            label="Due Date"
            format="DD MMM. YYYY"
            minDate={dayjs(new Date())}
            value={dayjs(new Date()).add(7, "day")}
          />
        </Grid2>
        <Button variant="contained" onClick={handleForm}>
          <Add />
        </Button>
      </Grid2>
    </Card>
  );
};

export default TodoForm;
