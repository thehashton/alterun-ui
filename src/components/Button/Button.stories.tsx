import React from 'react';

import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <Button {...args} />;

export const Primary: any = Template.bind({});
Primary.args = {
    children: 'Button',
};
