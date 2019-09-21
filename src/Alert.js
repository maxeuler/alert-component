import React, { useState } from 'react'
import styled from '@emotion/styled';

const AlertStyle = styled.div`
  display: grid;
  grid-template-columns: 10% auto 5%;
  max-width: 400px;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-radius: 2px;
  margin: 1rem auto;
  padding: 0.5rem;
  font-size: 0.75rem;

  &.success {
    border-left: 3px solid #27ae60;
    color: #27ae60;
  }

  &.error {
    border-left: 3px solid #d63031;
    color: #d63031;
  }

  .icon {
    margin: auto 0;
    font-size: 1.2rem;
    text-align: center;
  }
  
  p {
    padding-left: 1rem;
    color: #57606f;
  }
  .close {
    color: #57606f;
    position: relative;
    top: -3px;
    right: 0;
    text-align: right;
    padding: 0;
    cursor: pointer;
    max-height: 1.5rem;
    font-size: 0.9rem;
  }
`;

const Alert = props => {
  const [isShowing, setShowing] = useState(false);
  const [isError, setError] = useState(props.isError || false);

  return (
    <AlertStyle className={isError ? 'error' : 'success'}>
      {isError ? (
        <div className="icon">&#10008;</div>
      ) : (
        <div className="icon">&#10004;</div>
      )}
      <p><b>{`${isError ? 'Error:' : 'Success:'}`}</b> {props.message}</p>
      <div className="close">&#10005;</div>
    </AlertStyle>
  )
}

export default Alert;