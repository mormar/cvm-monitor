import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const initialState = {
  search: ""
};

const Home = () => {
  const { repositories } = useSelector(state => ({
    repositories: state.repositories
  }));

  const alphabetiseRepositories = [...repositories].sort(function(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  const [search, setSearch] = useState(initialState.search);

  const findRepository = alphabetiseRepositories.filter(repositorie => {
    return repositorie.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const repositoriesList = findRepository.length ? (
    findRepository.map(repositorie => {
      return (
        <div key={repositorie.id}>
          <Link to={"/" + repositorie.url}>{repositorie.name}</Link>
        </div>
      );
    })
  ) : (
    <div>Invalid name of repositorie</div>
  );

  return (
    <Main>
      <h1>Registered Stratum 0 Repositories</h1>
      <input onChange={e => setSearch(e.target.value)} value={search} />
      {repositoriesList}
    </Main>
  );
};

export default Home;
