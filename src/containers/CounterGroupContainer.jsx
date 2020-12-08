import CounterGroup from '../components/CounterGroup.jsx';
import { connect } from "react-redux";

// state = store 入面's state
const mapStateToProps = (state) => ({
    size: state.size
});

const CounterGroupContainer = connect(mapStateToProps, null)(CounterGroup)

export default CounterGroupContainer;