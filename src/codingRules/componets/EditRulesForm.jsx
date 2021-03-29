import React, {useState, useEffect} from 'react';
import {Input, Button, message, Switch, Form} from 'antd';

import ProForm, {
	ProFormText,
	ProFormDateRangePicker,
	ProFormSelect, ModalForm, ProFormTextArea, ProFormSwitch,
} from '@ant-design/pro-form';
import {PlusOutlined} from '@ant-design/icons';

const {TextArea} = Input;

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
const waitTime = (time = 100) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, time);
	});
};

const EditRulesForm = () => {

	return (
			<ModalForm
					title="规则名称"
					trigger={
						<Button type="link">
							编辑
						</Button>
					}
					onFinish={async (values) => {
						await waitTime(2000);
						console.log(values);
						message.success('提交成功');
					}}
					initialValues={{
						appName: 'chapter1',
						ruleName: '规则名称',
						marking: 'Lab',
						prefix:'CDC',
						includeDate: true,
						dateFormat: '1',
						fixedDigit:true,
						fixedDigitLength: 0,
						ruleTemplate: '$C$-$D$-$S$',
						resetBasis: resetBasisEnum[3],
						ruleTemplateDescription: '',
						memo: '简短备注文案',
					}}
					layout="horizontal"
					labelCol={{span: 6}}
					wrapperCol={{span: 14}}
					labelAlign='right'
			>
				<ProFormSelect options={[
					{
						value: 'chapter1',
						label: '应用名称1',
					},
					{
						value: 'chapter2',
						label: '应用名称2',
					},
					{
						value: 'chapter3',
						label: '应用名称3',
					},
					{
						value: 'chapter4',
						label: '应用名称4',
					},
				]} width="md" name="appName" label="归属应用"
				               disabled
				/>

				<ProFormText
						name='marking'
						width="md"
						label="标识"
						// tooltip="最长为 20 位"
						placeholder="RGGGG"
						disabled
				/>
				<ProFormText
						width="md"
						name='prefix'
						label="前缀"
				/>

				<ProFormSwitch name="includeDate" label="是否包含日期" rules={[{ required: true, message: '该项必填!' }]} />
				<ProFormSelect
						width="md"
						options={[
							{
								value: '1',
								label: 'yyyyMMDD',
							},
							{
								value: '2',
								label: 'yyMMDD',
							},
							{
								value: '3',
								label: 'yyMM',
							},
							{
								value: '4',
								label: 'yyyyMM',
							},
							{
								value: '5',
								label: 'yyyy',
							},
							{
								value: '6',
								label: 'yy',
							},
						]}
						name="dateFormat"
						label="日期格式"
						placeholder="请选择日期格式"
						defaultValue='1'
				/>
				<ProFormSwitch name="fixedDigit" label="流水号是否固定位数" rules={[{ required: true, message: '该项必填!' }]}/>
				<ProFormText
						name="fixedDigitLength"
						width="md"
						label="流水号固定位数长度"
				/>
				<ProFormSelect
						width="md"
						options={[
							{
								value: '1',
								label: '不重置',
							},
							{
								value: '2',
								label: '年',
							},
							{
								value: '3',
								label: '月',
							},
							{
								value: '4',
								label: '日',
							},
						]}
						name="resetBasis"
						label="流水号重置依据"
						placeholder="请选择"
				/>
				<ProFormText
						name="ruleTemplate"
						width="md"
						label="规则模板"
						tooltip="规则模板说明规则模板说明规则模板说明规则模板说明规则模板说明规则模板说明规则模板说明规则模板说明"
						rules={[{ required: true, message: '该项必填!' }]}
				/>

				<ProFormTextArea width="md" name="memo" label="备注" showCount
				                 maxLength={300}/>


			</ModalForm>
	);
};

export default EditRulesForm;
