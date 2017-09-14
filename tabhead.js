import React from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs } from 'native-base';

  import Tab1 from './src/tabOne';
  import Tab2 from './src/tabTwo';

  export default class TabHead extends React.Component {

      render () {
        return (
        <Container>
          <Header hasTabs/>
          <Tabs initialPage={1}>
            <Tab heading="Tab1">
              <Tab1/>
            </Tab>
            <Tab heading="Tab2">
              <Tab2/>
            </Tab>
          </Tabs>
        </Container>
      );
    }
   }
