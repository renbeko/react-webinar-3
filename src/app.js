import React, { useCallback, useEffect, useState } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Popup from "./components/popup"
/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {

  const list = store.getState().list;

  const basketList = store.getState().basketList;

  const [popupBasketVisible, setPopupVisible] = useState(false);

  const [total, setTotal] = useState(0)

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onAddItemBasket: useCallback((item) => {
      store.onAddItemBasket(item);
    }, [store]),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store])
  }

  useEffect(() => {
    let sum = 0

    basketList.map(basketItem => {
      sum += (basketItem.price * basketItem.count)
    })

    setTotal(sum)
  }, [basketList])

  return (
    <PageLayout>
      <Head title='Магазин' />
      <Controls setPopupVisible={setPopupVisible} amount={basketList.length} total={total} />
      <List list={list}
        onAddItemBasket={callbacks.onAddItemBasket} />
      {popupBasketVisible && (
        <Popup basketList={basketList} setPopupVisible={setPopupVisible} total={total}
          onDeleteItem={callbacks.onDeleteItem} />
      )}
    </PageLayout>
  );
}

export default App;
