import React from 'react';

function SpecSelect() {
    const summary = Object.keys(props.selected)
    .map(key => <div className="summary__option" key={key}>
      <div className="summary__option__label">{key}  </div>
      <div className="summary__option__value">{props.selected[key].name}</div>
      <div className="summary__option__cost">
        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(props.selected[key].cost) }
      </div>
  </div>)

    return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            { features }
        </section>
    )
}


export default SpecSelect