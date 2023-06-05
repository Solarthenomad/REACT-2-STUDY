import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
//리액트 포탈 사용하기 

// 에러 모달창을 Backdrop, ModalOverly 두가지로 나누었음 

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
        {/* 리액트덤.크리에이트 포탈(노드, 포인터: 요소가 실제로 사용되는 인덱스.에이치티엠엘의 id) : 두가지 인수를 취함 */}
        {/*index.html에서 사용하는 것이 가능하다. */}
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};
//ref(참조) : 다른 DOM에 접근하여 그 DOM을 사용할 수 있도록하는 속성
export default ErrorModal;