import { addNewTask, updateTask } from "./server";

(async function myFunc() {
  await addNewTask({
    name: "MyTask",
    id: "1234262",
  });

  await updateTask({
      id: "1234262", 
      name:"new tasks verion"
  })
}) (); 
