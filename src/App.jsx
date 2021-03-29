import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {Layout} from 'antd';
import {
	CopyrightCircleOutlined,
} from '@ant-design/icons';
import FrameNav from './components/FrameNav';
import SystemMenu from './codingRules/SystemMenu';
import CodingRulesManagement from './codingRules/CodingRulesManagement';
import OrganizationRulesManagement
	from './codingRules/OrganizationRulesManagement';

const {Header, Content, Footer, Sider} = Layout;

function App() {
	return (
			<>
				<FrameNav/>
				<Layout className="layout-content">
					<Sider theme="light" style={{borderRight: '1px #f0f2f5 solid'}}>
						<div className="app-name">编码规则管理</div>
						<SystemMenu/>
					</Sider>
					<Layout>
						<Content>
							<Routes>

								<Route path="/rules" element={<CodingRulesManagement/>}></Route>
								<Route path="/organizationRules"
								       element={<OrganizationRulesManagement/>}></Route>
							</Routes>
						</Content>
						<Footer style={{textAlign: 'center'}}>
							Copyright <CopyrightCircleOutlined/> 2021 安徽贝慕信息科技出品
						</Footer>
					</Layout>
				</Layout>
			</>
	);
}

export default App;
