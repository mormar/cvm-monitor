import React, { Component } from "react";
import styled from "styled-components";
import {
  black,
  shipGrey,
  athensGrey,
  grey,
  gravel,
  roboto,
  green,
  red,
  brown
} from "../utilities";
import { getRepository } from "../actions/getRepository";
import { connect } from "react-redux";
import { faTimes, faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import moment from "moment";

const Box = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  table {
    margin: 20px 0px;
    width: 100%;
    border-spacing: 0;
    border-radius: 20px;
    overflow: hidden;
  }
  th,
  td {
    text-align: left;
    border-bottom: 1px solid ${gravel};
    padding: 0.25rem;
    background: ${grey};
    ${roboto};
    padding: 10px 15px;
  }
  tr td:first-child {
    width: 300px;
  }
  .table-title {
    font-size: 1.25em;
    font-weight: 600;
    background: ${shipGrey};
    color: ${athensGrey};
    ${roboto};
    padding: 10px 15px;
  }
  .table-subtitle {
    font-size: 1em;
    font-weight: 600;
    ${roboto};
    background: ${athensGrey};
  }
`;

const Title = styled.div`
  padding-top: 20px;
  color: ${black};
  font-size: 2.75em;
  font-weight: 500;
  ${roboto};
`;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryData: null,
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("api/")
      .then(result =>
        this.setState({ repositoryData: result.data, isLoading: false })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleClick = () => {
    this.props.getRepository(this.props.getRepository.id);
  };

  render() {
    // console.log(this.props);
    const { repository } = this.props;
    const { repositoryData, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (this.state.repositoryData === null) {
      return <p>Loading ...</p>;
    } else {
      return (
        <Box>
          <Title>{repository.name}</Title>
          <table>
            <thead>
              <tr>
                <th className="table-title" colSpan="2">
                  Stratum 0
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Revision</td>
                {repositoryData.recommendedStratum0.hasOwnProperty(
                  "revision"
                ) ? (
                  <td>{repositoryData.recommendedStratum0.revision}</td>
                ) : (
                  <td>lack of data</td>
                )}
              </tr>
              <tr>
                <td>Oldest Stratum1 Revision</td>
                {repositoryData.hasOwnProperty("oldestRevisionStratumOne") ? (
                  <td>{repositoryData.oldestRevisionStratumOne}</td>
                ) : (
                  <td>lack of data</td>
                )}
              </tr>
              <tr>
                <td>Last Modified</td>
                {repositoryData.recommendedStratum0.hasOwnProperty(
                  "publishedTimestamp"
                ) ? (
                  <td>
                    {moment
                      .unix(
                        repositoryData.recommendedStratum0.publishedTimestamp
                      )
                      .format("Do MMMM YYYY h:mm:ss a")}
                  </td>
                ) : (
                  <td>lack of data</td>
                )}
              </tr>
              <tr>
                <td>Whitelist Expiry Date</td>
                {repositoryData.hasOwnProperty("whitelistExpiryDate") ? (
                  <td>{repositoryData.whitelistExpiryDate}</td>
                ) : (
                  <td>lack of data</td>
                )}
              </tr>
            </tbody>
          </table>

          {repositoryData.recommendedStratum1s.map(stratumOne => (
            <table key={stratumOne.id}>
              <thead>
                <tr>
                  <th className="table-title" colSpan="2">
                    Stratum 1
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th className="table-subtitle" colSpan="2">
                    {stratumOne.hasOwnProperty("name")
                      ? stratumOne.name
                      : "lack of data"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Revision</td>
                  <td>
                    {stratumOne.hasOwnProperty("revision")
                      ? stratumOne.revision
                      : "lack of data"}{" "}
                    {stratumOne.hasOwnProperty("publishedTimestamp")
                      ? moment
                          .unix(stratumOne.publishedTimestamp)
                          .format("Do MMMM YYYY h:mm:ss a")
                      : "lack of data"}
                  </td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>
                    {stratumOne.hasOwnProperty("url")
                      ? stratumOne.url
                      : "lack of data"}
                  </td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>
                    {stratumOne.health === "green" ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: green }}
                      />
                    ) : stratumOne.health === "red" ? (
                      <FontAwesomeIcon icon={faTimes} style={{ color: red }} />
                    ) : (
                      <FontAwesomeIcon
                        icon={faMinus}
                        style={{ color: brown }}
                      />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </Box>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.repository_name;
  return {
    repository: state.repositories.find(repository => repository.url === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRepository: id => {
      dispatch(getRepository(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
