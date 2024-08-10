import {
  describe,
  expect,
} from 'vitest';

import MyCounter
  from '@/components/MyCounter.vue'; // Import the component correctly
import { mount } from '@vue/test-utils';

describe('Testing MyCounter Component', () => {





    test('INCREMENTAL COUNTER TYPE', async () => {
        
        const value = 10;
        
        const wrapper = mount(MyCounter, {
            props: {
                value: value,
            },
        });
        const [counterLabel, squareLabel ] = wrapper.findAll('h3');

        await wrapper.find('button').trigger('click');
    
        expect(counterLabel.text()).toContain(`Counter: ${value + 1}`);
        console.log(counterLabel.text());

        expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);


    });

    
});
