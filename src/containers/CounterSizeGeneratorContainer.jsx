import CounterSizeGenerator from "../components/CounterSizeGenerator";
import { connect } from "react-redux";
import { changeSize } from "../actions";

const mapDispatchToProps = (dispatch) => ({
    changeSize: (value) => {
        dispatch(changeSize(value));
    },
});

const CounterSizeGeneratorContainer = connect(null, mapDispatchToProps)(CounterSizeGenerator);

export default CounterSizeGeneratorContainer;