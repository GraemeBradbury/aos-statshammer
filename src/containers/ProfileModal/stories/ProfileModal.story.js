import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileModal from 'containers/ProfileModal';
import { withProvider } from './store';

storiesOf('Containers/ProfileModal', module)
  .addDecorator(withProvider)
  .add('Basic', () => {
    const profile = {
      num_models: 20,
      attacks: 2,
      to_hit: 3,
      to_wound: 3,
      rend: 1,
      damage: 2,
    };
    return (
      <ProfileModal
        open
        header="Edit Profile"
        profile={profile}
      />
    );
  })

  .add('With Modifiers', () => {
    const profile = {
      num_models: 20,
      attacks: 2,
      to_hit: 3,
      to_wound: 3,
      rend: 1,
      damage: 2,
      modifiers: [
        {
          description: 'Reroll Ones for {characteristic}',
          id: 'reroll_ones',
          name: 'Reroll Ones',
          options: {
            characteristic: {
              value: 'to_hit',
            },
          },
        },
        {
          description: 'Add {bonus} for {characteristic}',
          id: 'bonus',
          name: 'Bonus',
          options: {
            characteristic: {
              value: 'to_wound',
            },
            bonus: {
              value: 1,
            },
          },
        },
      ],
    };
    return (
      <ProfileModal
        open
        header="Edit Profile"
        profile={profile}
      />
    );
  });