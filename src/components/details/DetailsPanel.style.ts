import styled, { css } from "styled-components";
import { FONT_SIZES } from "../../static/styles/typography";
import { mobile, tablet } from "../../utils/ScreenSizes";

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

  ${tablet(css`
    height: 40%;
    padding-left: 4rem;
  `)};

  ${mobile(css`
    height: 45%;
    padding: 3rem 1.62rem 0;
    flex-direction: column;
    justify-content: revert;
  `)};
`;

const DetailPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 4.6rem 0 4.6rem 5.8rem;
  width: 50%;
  position: relative;

  ${tablet(css`
    margin: revert;
  `)};

  ${mobile(css`
    margin: revert;
    width: 100%;
  `)};
`;

const DividerLine = styled.div`
  width: 0.0625rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.divider.background};
  opacity: 0.25;
  position: absolute;
  right: 0;

  ${tablet(css`
    display: none;
  `)};

  ${mobile(css`
    display: none;
  `)};
`;

const DetailBox = styled.div`
  ${tablet(css``)};

  ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
  `)};
`;

const DetailHeader = styled.p`
  text-transform: uppercase;
  font-size: ${FONT_SIZES.sm};
  color: ${({ theme }) => theme.colors.panel.text};
  letter-spacing: 0.1875rem;

  ${tablet(css`
    font-size: 0.8125rem;
    letter-spacing: 0.1625rem;
  `)};

  ${mobile(css`
    font-size: 0.625rem;
    letter-spacing: 0.125rem;
  `)};
`;

const DetailValue = styled.p`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 3.5rem;
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.panel.text};

  ${tablet(css`
    font-size: ${FONT_SIZES.xl};
  `)};

  ${mobile(css`
    font-size: ${FONT_SIZES.sm3};
    margin-top: unset;
  `)};
`;

export {
  PanelWrapper,
  DetailPanel,
  DetailBox,
  DetailHeader,
  DetailValue,
  DividerLine,
};
