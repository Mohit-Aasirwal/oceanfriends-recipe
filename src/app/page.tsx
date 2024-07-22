import Filter from "@/components/Filter";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Categories from "@/containers/Home/Categories";
import NewRecipes from "@/containers/Home/NewRecipes";

export default function Home() {
  return (
    <main className="p-4 pt-10 flex space-y-5 flex-col w-screen min-h-screen overflow-x-hidden">
      <Header />
      <div className="flex flex-row space-x-3 z-50">
        <Search />
        <Filter />
      </div>
      <div className="flex flex-col space-y-5">
        <Categories />
        <NewRecipes />
      </div>
    </main>
  );
}
