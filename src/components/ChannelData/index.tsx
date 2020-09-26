import React, { useEffect, useRef } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage
            key={n}
            author="Matheus Valandro"
            date="05/10/1995"
            content="Hoje é meu aniversário."
          />
        ))}

        <ChannelMessage
          isBot
          author="Diego Fernandes"
          date="05/10/2020"
          content={
            <>
              <Mention>@Matheus Valandro</Mention>, Lorem ipsum dolor sit amet.
            </>
          }
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
