import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchApiData } from './actions';

class Home extends Component {
    componentDidMount() {
        this.props.fetchApiData();
    }

    person = (x, i) => (
		<div key={x.id.value}>
			<h1>{x.gender}</h1>
			<h1>{x.name.first}</h1>
			<h1>{x.name.last}</h1>
			<img src={x.picture.large} alt={x.name.first} />
		</div>
    );

    render() {
        return (
			<div  style={{textAlign: 'center'}}>
				{this.props.data.loading ? 'Loading...' : this.props.data.results.map(this.person)}
			</div>
        );
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ fetchApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
