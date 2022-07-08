/*
 * @Descripttion:
 * @version:
 * @Author: shirley
 * @Date: 2022-07-07 17:19:23
 * @LastEditors: shirley
 * @LastEditTime: 2022-07-08 14:26:47
 */
import React from "react";
import { Button } from "antd";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        首页12
        <div>
          <Button type="dashed">Dashed Button</Button>
        </div>
      </div>
    );
  }
}

export default Home;
