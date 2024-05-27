import Dashboard from "../ui/dashboard/Dashboard";

export default function Layout({ children }) {
  return (
    <div>
        <Dashboard children={children}/>
    </div>
  );
}
