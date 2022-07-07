import { Navigate, useRoutes } from "react-router-dom"; 
import Notes from "./components/Notes";
import Reminder from "./components/Reminder/Reminder";
import Landing from "./components/Landing";
import Trash from "./components/Reminder/Trash";

export default function Router() {
    return useRoutes([
        { path: "/", element:  <Landing/> },
        { path: "notes", element: <Notes /> },
        { path: "reminder", element: <Reminder /> },
        { path: "trash", element: <Trash /> }
    ]);
}
