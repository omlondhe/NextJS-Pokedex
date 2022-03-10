import { NextPage } from "next";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PokemonList from "../components/home/PokemonList";
import styles from "../styles/pages/Home.module.css";

const queryClient: QueryClient = new QueryClient();

const home: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  );
};

export default home;
