import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Input } from 'react-materialize';
import _ from 'lodash';
import { queryForTVShows } from '../actions';
import { 
  ShowPanel,
  FullScreenInput
} from '../components';

class Shows extends Component {

  state = {
    searchText: ''
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.queryForShows(e.target.value);
    }
  }

  queryForShows(query) {
    const { queryForTVShows } = this.props;
    queryForTVShows(query);
    
    if (query !== "") {
      this.setState({
        searchText: query
      });
    }
  }

  render() {
    const debouncedQuery = _.debounce(e => this.queryForShows(e), 300);
    const { searchText } = this.state;
    const { shows } = this.props;

    return (
      <div className="container">
        {
          shows &&
          <Row style={{ marginTop: 50, }}>
            <Input s={12} type="text" label="Search for a TV Show" onChange={ (e) => debouncedQuery(e.target.value) } />
            
            { (shows && shows.length === 0 ) &&
              <Col s={12} style={{ color: 'rgba(0,0,0,0.6)' }}>
                <p>
                  {`No results found for "${searchText}"`}
                </p>
              </Col>
            }

            { (shows && shows.length > 0) &&
              <Col s={12} style={{ color: 'rgba(0,0,0,0.6)' }}>
                <p>
                  {`Showing results for "${searchText}" `}
                </p>
                <p style={{ marginTop: '-12px', fontSize: 12 }}>
                  {`${ shows.length } found`}
                </p>
              </Col>
            }

            <Col s={12}><div className="divider"></div></Col>
          </Row>
        }
        
        {
          (shows || []).map((result, key) => {
            return (
              <ShowPanel key={ key } result={ result } />
            );
          })
        }

        {
          !shows &&
          <FullScreenInput handleKeyPress={ this._handleKeyPress } />
        }
        
      </div>
    );
  }

}

const mapStateToProps = state => ({
  shows: state.shows
});

const mapDispatchToProps = dispatch => ({
  queryForTVShows: (query) => dispatch(queryForTVShows(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shows);