import React, { Component } from "react";
import TabsList from "../Tabs/TabsList";
import TabsItem from "../Tabs/TabsItem";
import TabsContent from "../Tabs/TabsContent";
import { TabsStyle } from "../styles/TabsStyle";

class Tabs extends Component {
  state = {
    selectedTab: 0
  };

  handleClick = itemIndex => {
    this.setState({
      selectedTab: itemIndex
    });
  };

  render() {
    let data = [
      { id: 1, title: "Tab 1" },
      { id: 2, title: "Tab 2" },
      { id: 3, title: "Tab 3" }
    ];
    return (
      <TabsStyle>
        <TabsList>
          {data.map((item, index) => (
            <TabsItem
              handleClick={this.handleClick.bind(this, index)}
              className={this.state.selectedTab === index ? "active" : ""}
              key={item.id}
            >
              {item.title}
            </TabsItem>
          ))}
        </TabsList>
        <div className="tabs__content-wrapper">
          <TabsContent tabId="0" activeTab={this.state.selectedTab}>
            tab content 1
          </TabsContent>
          <TabsContent tabId="1" activeTab={this.state.selectedTab}>
            tab content 2
          </TabsContent>
          <TabsContent tabId="2" activeTab={this.state.selectedTab}>
            tab content 3
          </TabsContent>
        </div>
      </TabsStyle>
    );
  }
}

export default Tabs;
