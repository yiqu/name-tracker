import React from 'react';

const NameListContext = React.createContext({
  nameList: [],
  nameClickFn: () => () => {}
});

export default NameListContext;