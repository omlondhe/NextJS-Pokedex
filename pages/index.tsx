import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "react-query";
import PokemonList from "../components/home/PokemonList";
import styles from "../styles/pages/Home.module.css";

const queryClient: QueryClient = new QueryClient();

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <QueryClientProvider client={queryClient}>
        <PokemonList />
      </QueryClientProvider>
    </div>
  );
};

export default Home;
