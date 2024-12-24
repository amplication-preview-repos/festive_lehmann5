import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { PrawnSeedList } from "./prawnSeed/PrawnSeedList";
import { PrawnSeedCreate } from "./prawnSeed/PrawnSeedCreate";
import { PrawnSeedEdit } from "./prawnSeed/PrawnSeedEdit";
import { PrawnSeedShow } from "./prawnSeed/PrawnSeedShow";
import { CartItemList } from "./cartItem/CartItemList";
import { CartItemCreate } from "./cartItem/CartItemCreate";
import { CartItemEdit } from "./cartItem/CartItemEdit";
import { CartItemShow } from "./cartItem/CartItemShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"PrawnFarmService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="PrawnSeed"
          list={PrawnSeedList}
          edit={PrawnSeedEdit}
          create={PrawnSeedCreate}
          show={PrawnSeedShow}
        />
        <Resource
          name="CartItem"
          list={CartItemList}
          edit={CartItemEdit}
          create={CartItemCreate}
          show={CartItemShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
