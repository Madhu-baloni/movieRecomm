import { redirect } from "react-router-dom";
export function AuthLoader() {
  if (!localStorage.getItem("currentUser")) {
    return redirect("/login");
  }
  return null;
}
