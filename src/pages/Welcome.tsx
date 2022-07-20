import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Typography } from 'antd';
import React from 'react';
import { FormattedMessage, useIntl } from 'umi';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Typography.Text strong>
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            Ant Design Pro Example
          </a>
        </Typography.Text>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis vel, dolore quae
          accusamus aperiam repellat ad soluta? Molestias, ipsum inventore magni fuga sint
          asperiores nostrum. Atque dolores distinctio explicabo.
        </p>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
