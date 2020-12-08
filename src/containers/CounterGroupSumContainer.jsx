import CounterGroupSum from '../components/CounterGroupSum.jsx';
import { connect } from "react-redux";

// state = store 入面's state
const mapStateToProps = (state) => ({
    sum: state.sum
});

const CounterGroupSumContainer = connect(mapStateToProps, null)(CounterGroupSum)

export default CounterGroupSumContainer;