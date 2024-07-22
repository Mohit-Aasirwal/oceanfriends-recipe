"use client";
import SearchCard from "@/components/Card/SearchCard";
import Filter from "@/components/Filter";
import Search from "@/components/Search";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

const SearchPage = () => {
  const router = useRouter();
  return (
    <div className="p-4 pt-10 flex space-y-5 flex-col w-screen min-h-screen overflow-x-hidden">
      <div className="flex flex-row w-full justify-start items-center">
        <IoArrowBack size={24} onClick={() => router.push("/")} />
        <h1 className="font-bold text-center w-full">Search Recipes</h1>
      </div>
      <div className="flex flex-row space-x-3">
        <Search />
        <Filter />
      </div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold ">Search Result</h1>
        <p className="text-xs text-[#A9A9A9]">235 results</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </div>
    </div>
  );
};

export default SearchPage;
