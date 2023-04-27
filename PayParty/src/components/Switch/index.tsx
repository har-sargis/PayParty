import React from 'react';
import { Switch, SwitchProps } from 'react-native-switch';

const CustomSwitch: React.FC<SwitchProps> = ({ ...rest }) => (
  <Switch
    circleSize={20}
    barHeight={6}
    circleBorderWidth={0}
    backgroundActive="#23a9b2"
    backgroundInactive="#CCDCDC"
    circleActiveColor="#fff"
    circleInActiveColor="#fff"
    containerStyle={{ width: 0 }}
    renderActiveText={false}
    renderInActiveText={false}
    switchWidthMultiplier={1.2}
    {...rest}
  />
);

export default CustomSwitch;
