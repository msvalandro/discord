import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    > .right svg {
      display: flex;
    }
  }

  > .right svg {
    display: none;
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  margin-left: 4px;
  width: 16px;
  height: 16px;
  color: var(--symbol);
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;
