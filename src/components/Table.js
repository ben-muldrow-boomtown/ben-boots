import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAll, getById } from '../actions/index';

class Table extends Component {

    componentWillMount() {
        console.log("props", this.props);
        console.log("this", this);
        this.props.getAll();
    }
    
    render() {
        return (
            <div className="mw9 center ph3-ns tc flex flex-wrap justify-between">
                {this.props.items && this.props.items.map(el => (
                    <div className="w-30 ma2 tc br3 ph2 bg-white shadow-4 pointer hover-black-50"
                        onClick={()=>this.props.getById(el.id)}>
                        <h3>{el.name}</h3>
                        <img src={el.image_url} alt="img" />
                        <p>{el.description}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { items: state.reducer.items };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: bindActionCreators(getAll, dispatch),
        getById: bindActionCreators(getById, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

