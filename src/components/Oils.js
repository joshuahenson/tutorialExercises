import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputUnit from './InputUnit';
import { setOilValue, removeOil } from '../actions';
import './Oils.css';

const Oils = ({ oils, unit, byPercent, setOilValue, removeOil, remaining, remainingNum, validating }) => {
  return (
    <div>
      <ul className="oils">
        {
          oils.map((oil) => {
            return (
              <li key={oil.oil}>
                <div className="i-b">
                  <InputUnit
                    id={`${oil.oilId}_oil_weight`} label={oil.oil} min="0" value={oil.value}
                    unit={byPercent ? '%' : unit}
                    onChange={e => setOilValue(e.target.value, oil.oilId)}
                  />
                </div>
                <button className="remove" type="button" onClick={() => removeOil(oil.oilId)}>
                  X
                </button>
              </li>
            );
          })
        }
      </ul>
      <p className={validating && remainingNum ? 'error' : ''}>
        {remaining}
      </p>
    </div>
  );
};

Oils.propTypes = {
  oils: PropTypes.arrayOf(PropTypes.object),
  unit: PropTypes.string,
  byPercent: PropTypes.bool,
  setOilValue: PropTypes.func,
  removeOil: PropTypes.func,
  remaining: PropTypes.string,
  remainingNum: PropTypes.number,
  validating: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    unit: state.unit,
    byPercent: state.byPercent
  };
}

export default connect(mapStateToProps, { setOilValue, removeOil })(Oils);
