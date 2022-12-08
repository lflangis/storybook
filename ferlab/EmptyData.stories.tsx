import { ExperimentOutlined, UserOutlined } from '@ant-design/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { List, Tabs, Typography } from 'antd';
import GridCard from '@ferlab/ui/core/view/v2/GridCard';
import CardHeader from '../../src/views/Dashboard/components/CardHeader';
import CardErrorPlaceholder from '../../src/views/Dashboard/components/CardErrorPlaceHolder';
import ExternalLink from '@ferlab/ui/core/components/ExternalLink';
import Empty from '@ferlab/ui/core/components/Empty';
import React from 'react';

export default {
  title: 'Ferlab/GridCard',
  component: GridCard,
  argTypes: {},
} as ComponentMeta<typeof GridCard>;

const Template: ComponentStory<typeof GridCard> = (args) => {
  return (
    <GridCard
      theme="shade"
      title={
        <CardHeader
          id="cardhead"
          key="cardhead"
          title="CardHeader Title"
          withHandle
          infoPopover={{
            title: 'Title',
            content: (
              <Typography.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography.Text>
            ),
          }}
        />
      }
      content={
        <Tabs defaultActiveKey="participants">
          <Tabs.TabPane
            tab={
              <div>
                <UserOutlined />
                Card Error Placeholder (0)
              </div>
            }
            key="participants"
          >
            <List
              bordered
              locale={{
                emptyText: (
                  <CardErrorPlaceholder
                    title="Failed to fetch Dashboard Card"
                    subTitle={
                      <Typography.Text>
                        'Please refresh and try again or'
                        <ExternalLink href={`mailto:email_to_do`}>
                          <Typography.Text>contact our support</Typography.Text>
                        </ExternalLink>
                        .
                      </Typography.Text>
                    }
                  />
                ),
              }}
              dataSource={[]}
              loading={false}
            />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <div>
                <ExperimentOutlined />
                Empty Tab (0)
              </div>
            }
            key="biospecimen"
          >
            <List
              bordered
              locale={{
                emptyText: <Empty imageType="grid" description={'Description of empty'} />,
              }}
              dataSource={[]}
              loading={false}
            />
          </Tabs.TabPane>
        </Tabs>
      }
    />
  );
};

export const Default = Template.bind({});
