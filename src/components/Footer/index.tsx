import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import {MY_PAGE} from "@/pages/constants";

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'csdn',
          title: 'Welcome to my CSDN',
          href: MY_PAGE,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/C0TAS',
          blankTarget: true,
        },
        {
          key: 'Design',
          title: 'COTAS Design',
          href: 'https://github.com/C0TAS',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
