import { Navigate, useRoutes } from "react-router-dom";   
import Notes from "./components/Reminder/Notes";
import Trash from "./components/Reminder/Trash";

export default function Router() {
    return useRoutes([
        { path: "/", element:  <Notes/> }, 
        { path: "trash", element: <Trash /> }
    ]);
}
