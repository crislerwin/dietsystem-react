import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import { data } from "./data";
export default function App() {
  return (
    <div className="root">
      <Navbar
        name={data.user.name}
        age={data.user.age}
        setting={data.menu.setting}
        write={data.menu.write}
        user_data={data.menu.user_data}
        logout={data.menu.logout}
      />
      <Card title={data.card.select} />
      <Card title={data.card.view} />
    </div>
  );
}
