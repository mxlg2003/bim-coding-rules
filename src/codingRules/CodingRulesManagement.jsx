import React from 'react';
import {
	Typography,
	PageHeader,
	Button,
	Descriptions,
	Tooltip,
	Input,
} from 'antd';
import {PageContainer} from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ProForm, {
	ModalForm,
	DrawerForm,
	QueryFilter,
	LightFilter,
	StepsForm,
	ProFormText,
	ProFormDateRangePicker,
	ProFormSelect,
	ProFormRadio,
} from '@ant-design/pro-form';
import {
	PlusOutlined,
	EllipsisOutlined,
	QuestionCircleOutlined,
	SearchOutlined,
} from '@ant-design/icons';
import ProTable, {TableDropdown} from '@ant-design/pro-table';

const {Title, Paragraph} = Typography;

const valueEnum = {
	0: 'close',
	1: 'running',
	2: 'online',
	3: 'error',
};
const tableListDataSource = [];
for (let i = 0; i < 5; i += 1) {
	tableListDataSource.push({
		key: i,
		name: 'AppName',
		appname: '应用名称',
		containers: '',
		status: '启用',
		createdAt: '',
		money: Math.floor(Math.random() * 2000) * i,
		progress: Math.ceil(Math.random() * 100) + 1,
		memo: i % 2 === 1 ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴' : '简短备注文案',
	});
}
const columns = [
	{
		title: '排序',
		dataIndex: 'index',
		valueType: 'index',
		width: 48,
	},
	{
		title: '归属应用',
		dataIndex: 'appname',
	},
	{
		title: '标识',
		dataIndex: 'marking',
	},
	{
		title: '状态',
		dataIndex: 'status',
		valueEnum: {
			all: { text: '全部', status: 'Default' },
			open: {
				text: '已停用',
				status: 'Error',
			},
			closed: {
				text: '已启用',
				status: 'Success',
			}

		},
	},
	{
		title: '是否包含日期',
		dataIndex: 'memo',

	},
	{
		title: (<>
			日期格式
			<Tooltip placement="top" title="这是一段描述">
				<QuestionCircleOutlined style={{marginLeft: 4}}/>
			</Tooltip>
		</>),
		dataIndex: 'createdAt',
		search: false,
	},
	{
		title: '是否固定位数',
		dataIndex: 'memo',
		search: false,
	},
	{
		title: '固定位数长度',
		dataIndex: 'memo',
		search: false,
	},
	{
		title: '规则模板',
		dataIndex: 'memo',
		search: false,
	},
	{
		title: '备注',
		dataIndex: 'memo',
		search: false,
	},
	{
		title: '操作',
		key: 'option',
		valueType: 'option',
		render: () => [
			<Button type="link">编辑</Button>,
			<Button type="link">启用</Button>,
		],
	},
];

const CodingRulesManagement = () => {
	return (
			<PageContainer

					header={{
						title: '编码规则管理',
						breadcrumb: {
							routes: [
								{
									path: '',
									breadcrumbName: '编码规则',
								},
								{
									path: '',
									breadcrumbName: '当前页面',
								},
							],
						},
						extra: [
							<Button key="1">次要按钮</Button>,
							<Button key="2">次要按钮</Button>,
							<Button key="3" type="primary">
								主要按钮
							</Button>,

						],
						footer: [
							<Paragraph style={{paddingBottom: '1em'}}>
								规则模板说明：C:代码，O：公司，P：项目，D：日期，S：流水号
							</Paragraph>],
					}}


			>
				<ProTable columns={columns} request={(params, sorter, filter) => {
					// 表单搜索项会从 params 传入，传递给后端接口。
					console.log(params, sorter, filter);
					return Promise.resolve({
						data: tableListDataSource,
						success: true,
					});
				}} rowKey="key" pagination={{
					showQuickJumper: true,
				}} search={{
					defaultCollapsed: true,
					span: 4,
					labelWidth: 'auto',
				}} dateFormatter="string" toolbar={{
					title: '编码规则',
					tooltip: '这是一个标题提示',
				}} toolBarRender={() => [

					<Button key="show">导入</Button>,
					<Button type="primary" key="primary">
						新建
					</Button>,

				]}/>


			</PageContainer>

	);
};

export default CodingRulesManagement;
