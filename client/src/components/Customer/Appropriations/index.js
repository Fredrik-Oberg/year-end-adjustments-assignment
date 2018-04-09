import React from "react";
import { connect } from "react-redux";
import AppropriationsData from "./AppropriationsData";
import { ADD_DEPR_INVEN_AMOUNT_CHANGE } from "../../../constants/actionTypes";
import { loadCustomerData } from "../../../actions/apiActions";
import { store } from "../../../store";

const mapStateToProps = state => ({
  ...state.appropriations
});

const mapDispatchToProps = dispatch => ({
  addDeprInvenAmountChangeHandler: amount =>
    dispatch({ type: ADD_DEPR_INVEN_AMOUNT_CHANGE, amount })
});

const getCirculationTaxAllocRes = props => {
  // eslint-disable-next-line
  return props.annualAccountResult + parseInt(props.addDeprInvenAmount) * -0.25;
};

store.dispatch(loadCustomerData());

class AppropriationsSection extends React.Component {
  render() {
    const circulationTaxAllocRes = getCirculationTaxAllocRes(this.props);
    return (
      <div className="appropriations-section">
        <h4>
          1. Till att börja med får du välja om du vill göra några så kallade
          bokslutsdispositioner.
        </h4>
        <p>
          Nedan ser du värden för maximal minskning av skattemässigt resultat.
          Du får själv ange vilka eventuella justeringar du vill göra av
          beskattningsbart resultat genom att fylla i belopp i fälten.
        </p>
        <p>
          Efter att du fyllt i de blåa fälten kan du se vilken effekt det får på
          bolagets skatt och möjlighet till utdelning till ägare.
        </p>
        <AppropriationsData
          addDeprInven={this.props.addDeprInven}
          invetShrinkLumpSum={this.props.invetShrinkLumpSum}
          circulationTaxAllocRes={circulationTaxAllocRes}
          returnTaxAllocRes={this.props.returnTaxAllocRes}
          addDeprInvenAmount={this.props.addDeprInvenAmount}
          addDeprInvenAmountChangeHandler={
            this.props.addDeprInvenAmountChangeHandler
          }
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(
  AppropriationsSection
);
