import React from "react";
import PropTypes from 'prop-types';
import { plural } from "../../utils";
import './style.css';

function Controls({ setPopupVisible, total, amount }) {
  return (
    <div className='Controls'>
      <div className='Controls-basket'>
        В корзине:
        {amount > 0
          ? <span>{amount} {plural(amount, { one: 'товар', few: 'товара', many: 'товаров' })} / {total.toLocaleString('ru-RU') } ₽</span>
          : <span>пусто</span>
        }

      </div>
      <button onClick={() => setPopupVisible(true)}>Перейти</button>    </div>
  )
}

Controls.propTypes = {
  setPopupVisible: PropTypes.func
};

Controls.defaultProps = {
  setPopupVisible: () => {}
}

export default React.memo(Controls);
