import React, { Component } from "react";
import styled from "styled-components";
import test from "../test.json";
import { black, gray } from "../utilities";
import { getRepository } from "../actions/getRepository";
import { connect } from 'react-redux';

const Box = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  table {
    border-collapse: collapse;
    margin: 20px 0px;
    width: 100%;
  }
  th,
  td {
    text-align: left;
    border: 1px solid black;
    padding: 0.25rem;
  }
  tr td:first-child {
    width: 300px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  .table-title {
    font-size: 1.25em;
    font-weight: 500;
    background: ${gray};
    color: #fff;
  }
  .table-subtitle {
    font-size: 1em;
    font-weight: 500;
  }
`;

const Title = styled.div`
  padding-top: 20px;
  color: ${black};
  font-size: 2.75em;
  font-weight: 500;
`;

class Details extends Component {
  handleClick = () => {
    this.props.getRepository(this.props.getRepository.id);
  };

  render() {
    console.log(this.props);
    const { repository } = this.props;
    return (
      <Box>
        <Title>{repository.name}</Title>
        <table>
          <thead>
            <tr>
              <th className="table-title" colSpan="2">
                Project Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Website</td>
              <td>http://www.cern.ch/atlas</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{test.description}</td>
            </tr>
            <tr>
              <td>Browse</td>
              <td>http://www.cern.ch/atlas</td>
            </tr>
          </tbody>
        </table>

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
              <td>Stratum0 Revision</td>
              <td>53059</td>
            </tr>
            <tr>
              <td>Oldest Stratum1 Revision</td>
              <td>53057</td>
            </tr>
            <tr>
              <td>Last Modified</td>
              <td>19.08.2019 13:02:15</td>
            </tr>
            <tr>
              <td>Whitelist Expiry Date</td>
              <td>27.09.2019 12:03:01 (38 days left)</td>
            </tr>
            <tr>
              <td>Root Catalog Hash</td>
              <td>349c92626c570a4080211d3dcf08e54d48e6fed8</td>
            </tr>
            <tr>
              <td>Number of known Stratum 1 Replicas</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>

        <table>
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
                DESY Replica
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revision</td>
              <td>53059 (Last Replication: 19.08.2019 13:30:39)</td>
            </tr>
            <tr>
              <td>URL</td>
              <td>http://grid-cvmfs-one.desy.de:8000/cvmfs/atlas.cern.ch</td>
            </tr>
            <tr>
              <td>Status</td>
              <td />
            </tr>
          </tbody>

          <thead>
            <tr>
              <th className="table-subtitle" colSpan="2">
                BNL Replica
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revision</td>
              <td>53059 (Last Replication: 19.08.2019 13:42:41)</td>
            </tr>
            <tr>
              <td>URL</td>
              <td>http://grid-cvmfs-one.desy.de:8000/cvmfs/atlas.cern.ch</td>
            </tr>
            <tr>
              <td>Status</td>
              <td />
            </tr>
          </tbody>

          <thead>
            <tr>
              <th className="table-subtitle" colSpan="2">
                Fermilab Replica
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revision</td>
              <td>53059 (Last Replication: 19.08.2019 13:42:04)</td>
            </tr>
            <tr>
              <td>URL</td>
              <td>http://cvmfs.fnal.gov/cvmfs/atlas.cern.ch </td>
            </tr>
            <tr>
              <td>Status</td>
              <td />
            </tr>
          </tbody>

          <thead>
            <tr>
              <th className="table-subtitle" colSpan="2">
                RAL Replica
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revision</td>
              <td>53059 (Last Replication: 19.08.2019 13:40:07)</td>
            </tr>
            <tr>
              <td>URL</td>
              <td>http://cernvmfs.gridpp.rl.ac.uk/cvmfs/atlas.cern.ch </td>
            </tr>
            <tr>
              <td>Status</td>
              <td />
            </tr>
          </tbody>

          <thead>
            <tr>
              <th className="table-subtitle" colSpan="2">
                CERN Replica
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revision</td>
              <td>53059 (Last Replication: 19.08.2019 13:44:02)</td>
            </tr>
            <tr>
              <td>URL</td>
              <td>http://cvmfs-stratum-one.cern.ch/cvmfs/atlas.cern.ch</td>
            </tr>
            <tr>
              <td>Status</td>
              <td />
            </tr>
          </tbody>
        </table>
      </Box>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.repository_name;
  return {
    repository: state.repositories.find(repository => repository.url === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      deletePost: (id) => { dispatch(getRepository(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details) 
