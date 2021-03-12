import React from "react";
import {Typography, PageHeader,Button, Descriptions } from "antd";
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

const {Title, Paragraph} = Typography;


const CodingRulesManagement = () => {
    return (
        // <PageHeader
        //     className="site-page-header"
        //     style={{backgroundColor: "#fff", margin: "8px"}}
        //     title="编码规则管理"
        //     subTitle="这是副标题"
        // >
        //     <Paragraph>
        //         规则模板说明：AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
        //         我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。
        //     </Paragraph>
        // </PageHeader>
        <PageContainer

            header={{
                title: '页面标题',
                breadcrumb: {
                    routes: [
                        {
                            path: '',
                            breadcrumbName: '一级页面',
                        },
                        {
                            path: '',
                            breadcrumbName: '二级页面',
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
                style:{backgroundColor:'#fff'}

            }}

           
        >
            <ProCard style={{ width: 300 }}>内容</ProCard>

        </PageContainer>

);
};

export default CodingRulesManagement;
