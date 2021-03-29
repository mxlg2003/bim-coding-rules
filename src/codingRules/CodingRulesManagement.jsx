import React, {useState, useEffect} from 'react';
import {
	Typography,
	PageHeader,
	Button,
	Descriptions,
	Tooltip,
	Input,
	Modal, message, Tag,
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
import RulesForm from './componets/RulesForm';

const {Title, Paragraph} = Typography;

const waitTime = (time = 100) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, time);
	});
};

const valueEnum = {
	0: 'close',
	1: 'running',
	2: 'online',
	3: 'error',
};

const resetBasisEnum = {
	0: '年',
	1: '月',
	2: '日',
	3: '不重置',
};
const tableListDataSource = [];
for (let i = 0; i < 5; i += 1) {
	tableListDataSource.push({
		key: i,
		ruleName: '规则名称',
		appName: '应用名称',
		marking: 'Lab',
		prefix: '',
		status: '启用',
		includeDate: i % 2 === 1 ? '是' : '否',
		dateFormat: 'yyyyMMDD',
		fixedDigit: i % 2 === 1 ? '是' : '否',
		fixedDigitLength: 0,
		ruleTemplate: '$C$-$D$-$S$',
		resetBasis: resetBasisEnum[3],
		ruleTemplateDescription: '',
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
		title: '规则名称',
		dataIndex: 'ruleName',
	},
	{
		title: '归属应用',
		dataIndex: 'appName',
		valueEnum: {
			all: {text: '全部', status: 'Default'},
			open: {
				text: '应用一',
				status: 'Error',
			},
			closed: {
				text: '应用二',
				status: 'Success',
			},

		},
	},
	{
		title: '标识',
		dataIndex: 'marking',
	},
	{
		title: '状态',
		dataIndex: 'status',
		valueEnum: {
			all: {text: '全部', status: 'Default'},
			open: {
				text: '已停用',
				status: 'Error',
			},
			closed: {
				text: '已启用',
				status: 'Success',
			},
		},
		render:
				tag => {
					let color = 'green';
					if (tag === '已停用') {
						color = 'volcano';
					}
					return (
							<Tag color={color} key={tag}>
								{tag}
							</Tag>
					);
				},
	},
	{
		title: '包含日期',
		dataIndex: 'includeDate',
		valueEnum: {
			all: {text: '全部', status: 'Default'},
			open: {
				text: '是',
				status: 'Error',
			},
			closed: {
				text: '否',
				status: 'Success',
			},
		},

	},
	{
		title: (<>
			日期格式
			<Tooltip placement="top" title="yyyy:年,MM:月,:dd:日">
				<QuestionCircleOutlined style={{marginLeft: 4}}/>
			</Tooltip>
		</>),
		dataIndex: 'dateFormat',
		search: false,
	},
	{
		title: '固定位数',
		dataIndex: 'fixedDigit',
		search: false,
	},
	{
		title: '固定长度',
		dataIndex: 'fixedDigitLength',
		search: false,
	},
	{
		title: '重置依据',
		dataIndex: 'resetBasis',
	},
	{
		title: (<>
			规则模板
			<Tooltip placement="top" title="C:代码，O：公司，P：项目，D：日期，S：流水号">
				<QuestionCircleOutlined style={{marginLeft: 4}}/>
			</Tooltip>
		</>),
		dataIndex: 'ruleTemplate',
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
		width: '100px',
		render: () => [
			// <Button type="link">查看</Button>,
			<Button type="link">编辑</Button>,
			<Button type="link">启用</Button>,
		],
	},
];

const CodingRulesManagement = () => {

	return (
			<PageContainer

					header={{
						title: '默认编码规则管理',
						breadcrumb: {
							routes: [
								{
									path: '',
									breadcrumbName: '编码规则管理',
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
					// tooltip: '这是一个标题提示',
				}} toolBarRender={() => [

					// <Button key="show">导入</Button>,
					<RulesForm/>,
				]}/>
			</PageContainer>

	);
};

export default CodingRulesManagement;
