import { css } from "styled-components";

export const scrollStyle = css`
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #8d8c9f;
    border-radius: 4px;
  }
`;
