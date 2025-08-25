import { createFileRoute } from '@tanstack/react-router'
import * as antd from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col pb-4 w-full">
      <h3>Welcome Home!</h3>

      <div className="flex flex-wrap gap-8"></div>
      {/* Form Elements Column */}
      <div className="flex-1 min-w-[320px] max-w-[400px]">
        <h4 className="text-lg font-semibold mb-4">Form Elements</h4>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Button:</label>
          <antd.Button type="primary">Primary</antd.Button>
          <antd.Button className="ml-2">Default</antd.Button>
          <antd.Button type="dashed" className="ml-2">Dashed</antd.Button>
          <antd.Button type="link" className="ml-2">Link</antd.Button>
        </div>
        <div className="mb-6"></div>
        <label className="block text-sm font-medium mb-1">Input:</label>
        <antd.Input placeholder="Basic usage" className="w-52" />
        <antd.Input.Password placeholder="Password" className="w-52 mt-2" />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Checkbox:</label>
        <antd.Checkbox>Checkbox</antd.Checkbox>
        <antd.Checkbox className="ml-2" disabled>
          Disabled
        </antd.Checkbox>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Radio:</label>
        <antd.Radio.Group defaultValue="a">
          <antd.Radio value="a">A</antd.Radio>
          <antd.Radio value="b">B</antd.Radio>
        </antd.Radio.Group>
      </div>
      <div className="mb-6"></div>
      <label className="block text-sm font-medium mb-1">Select:</label>
      <antd.Select defaultValue="option1" className="w-32"></antd.Select>
      <antd.Select.Option value="option1">Option 1</antd.Select.Option>
      <antd.Select.Option value="option2">Option 2</antd.Select.Option>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Switch:</label>
        <antd.Switch defaultChecked />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Slider:</label>
        <antd.Slider defaultValue={30} className="w-40" />
      </div>
      <div className="mb-6"></div>
      <label className="block text-sm font-medium mb-1">DatePicker:</label>
      <antd.DatePicker className="w-40" />

      {/* Data Display Column */}
      < div className="flex-1 min-w-[320px] max-w-[400px]" >
        <h4 className="text-lg font-semibold mb-4">Data Display</h4>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Alert:</label>
          <antd.Alert message="Success Text" type="success" showIcon />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Badge:</label>
          <antd.Badge count={5}>
            <antd.Avatar shape="square" size="large" />
          </antd.Badge>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Card:</label>
          <antd.Card title="Card Title" className="w-52">
            Card content
          </antd.Card>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Tag:</label>
          <antd.Tag color="magenta">Magenta</antd.Tag>
          <antd.Tag color="green" className="ml-2">Green</antd.Tag>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Avatar:</label>
          <antd.Avatar icon={<UserOutlined />} />
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} className="ml-2" />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">List:</label>
          <antd.List
            size="small"
            bordered
            dataSource={['Item 1', 'Item 2', 'Item 3']}
            renderItem={item => <antd.List.Item>{item}</antd.List.Item>}
            className="w-52"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Statistic:</label>
          <antd.Statistic title="Active Users" value={112893} />
        </div>
      </div >

      {/* Navigation & Feedback Column */}
      < div className="flex-1 min-w-[320px] max-w-[400px]" >
        <h4 className="text-lg font-semibold mb-4">Navigation & Feedback</h4>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Breadcrumb:</label>
          <antd.Breadcrumb>
            <antd.Breadcrumb.Item>Home</antd.Breadcrumb.Item>
            <antd.Breadcrumb.Item>List</antd.Breadcrumb.Item>
            <antd.Breadcrumb.Item>App</antd.Breadcrumb.Item>
          </antd.Breadcrumb>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Steps:</label>
          <antd.Steps current={1} size="small" items={[
            { title: 'Step 1' },
            { title: 'Step 2' },
            { title: 'Step 3' },
          ]} />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Spin:</label>
          <antd.Spin />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Progress:</label>
          <antd.Progress percent={50} status="active" />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Pagination:</label>
          <antd.Pagination defaultCurrent={1} total={50} pageSize={10} size="small" />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Tabs:</label>
          <antd.Tabs
            defaultActiveKey="1"
            items={[
              { key: '1', label: 'Tab 1', children: 'Content 1' },
              { key: '2', label: 'Tab 2', children: 'Content 2' },
            ]}
            className="w-52"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Popover:</label>
          <antd.Popover content="Popover content" title="Title">
            <antd.Button>Hover me</antd.Button>
          </antd.Popover>
        </div>
      </div>
    </div>
  )
}
