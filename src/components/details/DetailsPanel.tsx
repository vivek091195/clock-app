import {
  getCurrentTimezone,
  getDayOfTheWeek,
  getDayOfYear,
  getWeekOfYear,
} from "../../utils/dateTime";
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
          <DetailValue>{getCurrentTimezone()}</DetailValue>
        </DetailBox>
        <DetailBox>
          <DetailHeader>day of the year</DetailHeader>
          <DetailValue>{getDayOfYear()}</DetailValue>
        </DetailBox>
        <DividerLine></DividerLine>
      </DetailPanel>
      <DetailPanel>
        <DetailBox>
          <DetailHeader>day of the week</DetailHeader>
          <DetailValue>{getDayOfTheWeek()}</DetailValue>
        </DetailBox>
        <DetailBox>
          <DetailHeader>week number</DetailHeader>
          <DetailValue>{getWeekOfYear()}</DetailValue>
        </DetailBox>
      </DetailPanel>
    </PanelWrapper>
  );
};

export { DetailsPanel };
