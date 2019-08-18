import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { black } from "../utilities";
import { Input } from "../elements";

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 114px);
  .repository-name {
    color: ${black}
    font-size: 1.25em;
    line-height: 1.25em;
    text-decoration: none;
  }
  .list {
    margin: 20px 0px;
  }
`;

const Title = styled.div`
  padding: 20px 0px;
  color: ${black};
  font-size: 2.75em;
  font-weight: 500;
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
          <Link className="repository-name" to={"/" + repositorie.url}>
            {repositorie.name}
          </Link>
        </div>
      );
    })
  ) : (
    <div className="repository-name">Invalid name of repositorie</div>
  );

  return (
    <Main>
      <Title>Registered Stratum 0 Repositories</Title>
      <Input
        onChange={e => setSearch(e.target.value)}
        value={search}
        placeholder="search"
      />
      <div className="list">{repositoriesList}</div>
    </Main>
  );
};

export default Home;
