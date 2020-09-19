import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  height: 48px;
  width: 48px;
  margin-bottom: 8px;
  background-color: ${props =>
    props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  > img {
    height: 24px;
    width: 24px;
  }

  &::before {
    content: '';
    height: 9px;
    width: 9px;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    background-color: var(--white);
    border-radius: 50%;
    display: ${props => (props.hasNotifications ? 'inline' : 'none')};
  }

  &::after {
    content: '${props => props.mentions}';
    background-color: var(--notification);
    height: 16px;
    width: auto;
    padding: 0 4px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    display: ${props => (props.mentions ? 'inline' : 'none')};
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${props =>
      props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }
`;
