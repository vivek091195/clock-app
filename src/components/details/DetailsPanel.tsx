import {
  DetailBox,
  DetailHeader,
  DetailPanel,
  DetailValue,
  DividerLine,
  PanelWrapper,
} from "./DetailsPanel.style";

const DetailsPanel = () => {
  return (
    <PanelWrapper>
      <DetailPanel>
        <DetailBox>
          <DetailHeader>current timezone</DetailHeader>
          <DetailValue>europe/london</DetailValue>
        </DetailBox>
        <DetailBox>
          <DetailHeader>day of the year</DetailHeader>
          <DetailValue>295</DetailValue>
        </DetailBox>
        <DividerLine></DividerLine>
      </DetailPanel>
      <DetailPanel>
        <DetailBox>
          <DetailHeader>day of the week</DetailHeader>
          <DetailValue>5</DetailValue>
        </DetailBox>
        <DetailBox>
          <DetailHeader>week number</DetailHeader>
          <DetailValue>42</DetailValue>
        </DetailBox>
      </DetailPanel>
    </PanelWrapper>
  );
};

export { DetailsPanel };
