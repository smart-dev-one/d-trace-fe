/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Text } from '@smart-dev-one/smart-ui';
import { GridLoader } from 'react-spinners';

interface LoadingOverlayProps {
  loading: boolean;
  message?: string;
}

export const Loader = ({
  loading,
  message = 'Carregando...',
}: LoadingOverlayProps) => {
  const overlayStyle = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: ${loading ? 1 : 0};
    visibility: ${loading ? 'visible' : 'hidden'};
    transition:
      opacity 0.5s ease-in-out,
      visibility 0.5s ease-in-out;
  `;

  return (
    <div css={overlayStyle}>
      <GridLoader color="#ffffff" loading={loading} size={16} />
      <Text variant="subtitle1" fontSize={30} color="#fefefe" marginTop={6}>
        {message}
      </Text>
    </div>
  );
};
