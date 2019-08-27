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
  brown,
  above,
  white
} from "../utilities";
import { getRepository } from "../actions/getRepository";
import { connect } from "react-redux";
import {
  faTimes,
  faCheck,
  faMinus,
  faAngleDown,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import moment from "moment";
import { Button } from "../elements";

const Box = styled.div`
  max-width: 1200px;
  min-height: calc(100vh - 94px);
  margin: 0px 10px;
  ${above.desktop`
    margin: 0 auto;
  `}

  table {
    margin: 20px 0px;
    width: 100%;
    border-spacing: 0;
    overflow: hidden;
    border-radius: 10px;
    ${above.phone`
      border-radius: 20px;
    `}
  }
  th,
  td {
    text-align: left;
    border-bottom: 1px solid ${gravel};
    padding: 0.25rem;
    background: ${grey};
    ${roboto};
    padding: 10px 5px;
    font-size: 0.75em;
    ${above.phone`
      padding: 10px 15px;
      font-size: 1em;
    `}
  }
  tr td:first-child {
    width: 125px;
    ${above.phone`
      width: 150px;
    `};
    ${above.tablet`
      width: 300px;
    `}
  }
  .table-title {
    font-size: 1.25em;
    font-weight: 600;
    background: ${shipGrey};
    color: ${athensGrey};
    ${roboto};
    padding: 10px 15px;
  }
  .tabel-details {
    display: none;
  }
  .two-tab-elem {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .grid {
    ${above.tablet`
      display: flex;
      flex-wrap: wrap;
    `}
  }
  .card:nth-child(odd) {
    ${above.tablet`
      margin-right: 10px;
    `}
  }
  .card-title {
    font-size: 1em;
    font-weight: 600;
    ${roboto};
    padding: 10px 0px;
  }
  .card {
    display: flex;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 10px;
    background: ${grey};
    flex: 1 1 auto;
  }
  .img {
    padding: 1.5em;
    ${above.tablet`
      padding: 2em;
    `}
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .content {
    background: ${athensGrey};
    width: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    ${roboto};
  }
  .details {
    padding: 10px 0px;
    font-size: 0.75em;
    ${above.phone`
      font-size: 1em;
    `}
    &.revision {
      font-weight: 600;
    }
  }
  .revision {
    font-weight: normal;
  }
`;

const Title = styled.div`
  padding-top: 20px;
  color: ${black};
  font-size: 2em;
  font-weight: 500;
  ${roboto};
  ${above.phone`
    font-size: 2.75em;
  `}
`;

const Subtitle = styled.div`
  padding: 0px 15px 20px;
  color: ${black};
  font-size: 1.25em;
  font-weight: 600;
  ${roboto};
`;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryData: null,
      isLoading: false,
      error: null,
      details: false
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

  // handleClick = () => {
  //   this.props.getRepository(this.props.getRepository.id);
  // };

  handleClick = () => {
    this.setState(state => ({
      details: !state.details
    }));
  };

  render() {
    // console.log(this.props);
    const { repository } = this.props;
    const { repositoryData, error, details } = this.state;

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
                  <td className="two-tab-elem">
                    {repositoryData.whitelistExpiryDate}
                    <Button modifiers={["more"]} onClick={this.handleClick}>
                      {/* {details ? "Less details" : "More details"} */}
                      {details ? (
                        <FontAwesomeIcon
                          icon={faAngleUp}
                          style={{ color: white }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          style={{ color: white }}
                        />
                      )}
                    </Button>
                  </td>
                ) : (
                  <td>lack of data</td>
                )}
              </tr>

              <tr className={details ? "" : "tabel-details"}>
                <td>Url</td>
                {repositoryData.hasOwnProperty("url") ? (
                  <td>{repositoryData.url}</td>
                ) : (
                  <td>lack of data</td>
                )}
              </tr>

              <tr className={details ? "" : "tabel-details"}>
                <td>Contact</td>
                {repositoryData.hasOwnProperty("email") ? (
                  <td>{repositoryData.email}</td>
                ) : (
                  <td>lack of data</td>
                )}
              </tr>

              <tr className={details ? "" : "tabel-details"}>
                <td>rootHash</td>
                {repositoryData.hasOwnProperty("rootHash") ? (
                  <td>{repositoryData.rootHash}</td>
                ) : (
                  <td>lack of data</td>
                )}
              </tr>

              <tr className={details ? "" : "tabel-details"}>
                <td>rootHash</td>
                {repositoryData.hasOwnProperty("hashAlgorithm") ? (
                  <td>{repositoryData.hashAlgorithm}</td>
                ) : (
                  <td>lack of data</td>
                )}
              </tr>
            </tbody>
          </table>
          <Subtitle>Stratum 1</Subtitle>
          <div className="grid">
            {repositoryData.recommendedStratum1s.map(stratumOne => (
              <div key={stratumOne.id} className="card">
                <div className="img">
                  {stratumOne.health === "green" ? (
                    <FontAwesomeIcon icon={faCheck} style={{ color: green }} />
                  ) : stratumOne.health === "red" ? (
                    <FontAwesomeIcon icon={faTimes} style={{ color: red }} />
                  ) : (
                    <FontAwesomeIcon icon={faMinus} style={{ color: brown }} />
                  )}
                </div>

                <div className="content">
                  <div className="card-title">
                    {stratumOne.hasOwnProperty("name")
                      ? stratumOne.name
                      : "lack of data"}
                  </div>
                  <div className="details revision">
                    <span className="revision">Revision: </span>
                    {stratumOne.hasOwnProperty("revision")
                      ? stratumOne.revision
                      : "Revision: lack of data"}
                  </div>
                  <div className="details">
                    {stratumOne.hasOwnProperty("publishedTimestamp")
                      ? "Last Modified: " +
                        moment
                          .unix(stratumOne.publishedTimestamp)
                          .format("Do MMMM YYYY h:mm:ss a")
                      : "Last Modified: lack of data"}
                  </div>
                  <div className="details">
                    {stratumOne.hasOwnProperty("url")
                      ? stratumOne.url
                      : "lack of data"}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
