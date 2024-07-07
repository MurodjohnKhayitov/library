import React from 'react'
import { Alert, Flex, Spin } from 'antd';

function Loader() {
    const contentStyle = {
        padding: 50,
        background: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 4,
      };
      const content = <div style={contentStyle} />;
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <Flex gap="small" vertical>
                <Flex gap="small">
                    
                    <Spin tip="Loading" size="large">
                        {content}
                    </Spin>
                </Flex>
                 
            </Flex>
        </div>
    )
}

export default Loader