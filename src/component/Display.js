import React from 'react';
import PriceCalc from './PriceCalc'
import SpecSelect from './SpecSelect'

import './Display.css';


function Display(props) {

    return (
        <main>

          <SpecSelect selected={props.selected} features={props.features} updateFeature={(feature, newValue) => props.updateFeature(feature, newValue)} />
          <PriceCalc selected={props.selected} />

        </main>
    )
}

export default Display