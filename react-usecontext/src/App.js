import Navigation from "./Components/Navigation";
import ProductMaker from "./Components/ProductMaker";
import UserContext from "./Components/UserContext";

const user = {
  name: "SkillSafari",
  favorites: ["Sony", "Vu"]
};

export default function App() {
  return (
    <UserContext.Provider value={user}>
      <Navigation />
      <ProductMaker />
    </UserContext.Provider>
  );
}
