import styled from "styled-components";
import { FONT_SIZES } from "../../static/styles/typography";

const PanelWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 50%;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.panel.background};
  justify-content: space-between;
  padding-left: 4.5rem;
  backdrop-filter: blur(20px);
`;

const DetailPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 4.6rem 0 4.6rem 5.8rem;
  width: 50%;
  position: relative;
`;

const DividerLine = styled.div`
  width: 0.0625rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.divider.background};
  opacity: 0.25;
  position: absolute;
  right: 0;
`;

const DetailBox = styled.div``;

const DetailHeader = styled.p`
  text-transform: uppercase;
  font-size: ${FONT_SIZES.sm};
  color: ${({ theme }) => theme.colors.panel.text};
  letter-spacing: 0.1875rem;
`;

const DetailValue = styled.p`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 3.5rem;
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.panel.text};
`;

export {
  PanelWrapper,
  DetailPanel,
  DetailBox,
  DetailHeader,
  DetailValue,
  DividerLine,
};
