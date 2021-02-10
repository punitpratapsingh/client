import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchEntity,
} from "../../redux/actions";
import { APPLICATION_ROUTES } from '../../constants';
import LoadingOverlay from "../../components/LoadingOverlay";
import "./index.scss";

const Table = (props) => {
  useEffect(() => {
      document.title = "Table";
      const { triggerFetchEntity } = props;
      triggerFetchEntity(
        APPLICATION_ROUTES.COMMENT_LIST,
      );
  }, []);

  const reload = () => {
    props.triggerFetchEntity(
      APPLICATION_ROUTES.COMMENT_LIST,
    );
  };

  const {
    commentsData,
    fetching,
  } = props;

  return (
      <div className='main-div'>
        {LoadingOverlay({ show: fetching })}
        <button className='table-btn' onClick={reload}>
          Reload
        </button>
        <div class='table-div'>
        <table className='table'>
              <thead className='table-head'>
                <tr className='head-tr'>
                  <th>Id</th>
                  <th>Body</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className='table-body'>
                {commentsData && commentsData.comments ? (
                  commentsData.comments.map((data, index) => {
                    return (
                      data && (
                        <tr className='body-tr' key={data.id + index}>
                          <td>
                            {data.id}
                          </td>
                          <td>
                            {data.body}
                          </td>
                          <td>
                            {data.name}
                          </td>
                          <td>
                            {data.email}
                          </td>
                        </tr>
                      )
                    );
                  })
                ):(
                  <tr>
                    <td colSpan='4'>No data</td>
                  </tr>
                )
              }
              </tbody>
            </table>
        </div>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerFetchEntity: (endpoint) => dispatch(fetchEntity({ endpoint })),
  };
};

const mapStateToProps = (state) => {
  const {
    fetching,
    commentsData,
  } = state;
  return {
    fetching,
    commentsData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
