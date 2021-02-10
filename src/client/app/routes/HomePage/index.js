import React, { useEffect } from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import "./index.scss";

const Home = (props) => {
  useEffect(() => {
      document.title = "Home";
  }, []);

  const loadTable = () => {
    window.location = '/table';
  };

  const {
  } = props;

  return (
      <div className='main-div'>
      <div className='center-div'>
        <div className='name-div'>
          Punit Singh
        </div>
        <button className='btn' onClick={loadTable}>
          Load Table
        </button>
      </div>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};
const mapStateToProps = (state) => {
  const { } = state;
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
