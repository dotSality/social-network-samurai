import { Tabs } from 'antd';
import React from 'react';
import { settingsItems } from '../../constants/settings';
import s from './Settings.module.scss';

const Settings = () => {
  return (
    <div className={s.main}>
      <Tabs
        destroyInactiveTabPane
        tabPosition="left"
        items={settingsItems}
      />
    </div>
  );
};

export default Settings;