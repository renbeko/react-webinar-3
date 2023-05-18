import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function Popup({ basketList, setPopupVisible, onDeleteItem, total }) {
    return (
        <>
            <div className='overlay'></div>
            <div className='popup-basket'>
                <div className='popup-basket-up'>
                    <h2>Корзина</h2>
                    <button onClick={() => setPopupVisible(false)}>Закрыть</button>
                </div>
                <div className='popup-basket-list'>
                    {basketList.map(item =>
                        <div key={item.code} className='List-item'>
                            <Item item={item} onDelete={onDeleteItem} />
                        </div>
                    )}
                </div>
                <div className='total'>
                    <span>Итого</span>
                    <span>{total.toLocaleString('ru-RU') } ₽</span>
                </div>
            </div>
        </>
    )

}

Popup.propTypes = {
    setPopupVisible: PropTypes.func
};

Popup.defaultProps = {
    setPopupVisible: () => { }
}


export default React.memo(Popup);
