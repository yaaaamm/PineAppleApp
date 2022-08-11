import React, { Component } from 'react';

import SwitchTabs from 'react-tabs-table';
import PersonMainData from "./PersonMainData";

class Example extends Component {
  render() {
    return (
      <SwitchTabs>
        <SwitchTabs.TabsGroup>
          <SwitchTabs.Tab>Tab 1</SwitchTabs.Tab>
          <SwitchTabs.Tab>Tab 2</SwitchTabs.Tab>
          <SwitchTabs.Tab>Tab 3</SwitchTabs.Tab>
        </SwitchTabs.TabsGroup>
        <SwitchTabs.ContentGroup>
          <SwitchTabs.Content>abc1</SwitchTabs.Content>
          <SwitchTabs.Content>abc2</SwitchTabs.Content>
          <SwitchTabs.Content>abc3</SwitchTabs.Content>
        </SwitchTabs.ContentGroup>
      </SwitchTabs>
    );
  }
}

export default Example;