import React from 'react';
import styled from 'styled-components';

// https://www.canva.com/
const themeColours = [
  {
    themeWhiteOne: {
      one: '#FAF7F5',
      two: '#3E3E40',
      three: '#C88D5B',
      four: '#E25339',
      five: '#767B7F',
    },
  },
  {
    themeWhiteTwo: {
      one: '#D2D5CA',
      two: '#888683',
      three: '#D3AFA6',
      four: '#462F22',
      five: '#9A6B50',
    },
  },
  {
    themeWhiteThree: {
      one: '#AFD0ED',
      two: '#588DC2',
      three: '#FBFBFB',
      four: '#788992',
      five: '#D1C1BD',
    },
  },
  {
    themeWhiteFour: {
      one: '#F6F7F7',
      two: '#B1D1D8',
      three: '#99BFCB',
      four: '#7AA6B8',
      five: '#5C8FA6',
    },
  },
  {
    themeWhiteFive: {
      one: '#87A9C5',
      two: '#F5CE69',
      three: '#415B66',
      four: '#C9C49B',
      five: '#71765B',
    },
  },
  {
    themeWhiteSix: {
      one: '#4D4739',
      two: '#645741',
      three: '#816646',
      four: '#A37B4E',
      five: '#D89252',
    },
  },
  {
    themeWhiteSeven: {
      one: '#F3ECD7',
      two: '#42231A',
      three: '#BFAB99',
      four: '#8E6B53',
      five: '#2D150A',
    },
  },
  {
    themeWhiteEight: {
      one: '#FEFEFE',
      two: '#E5E5E5',
      three: '#B6E8F2',
      four: '#4BC3DC',
      five: '#F8CDCA',
    },
  },
  {
    themeWhiteNine: {
      one: '#FBFDFA',
      two: '#DDEDCA',
      three: '#8BC24F',
      four: '#97B7AC',
      five: '#29674B',
    },
  },
  {
    themeDarkOne: {
      one: '#04164B',
      two: '#2A365F',
      three: '#28BD9D',
      four: '#63758A',
      five: '#E47042',
    },
  },
  {
    themeDarkTwo: {
      one: '#2F2E2E',
      two: '#5E5D5B',
      three: '#A39B8A',
      four: '#564325',
      five: '#7C691C',
    },
  },
  {
    themeDarkThree: {
      one: '#1A4C57',
      two: '#8CABA9',
      three: '#0474AB',
      four: '#aeaeae',
      five: '#fefefe',
    },
  },
  {
    themeDarkFour: {
      one: '#212121',
      two: '#3C3D3D',
      three: '#696969',
      four: '#ADADAD',
      five: '#407466',
    },
  },
];

// const themeWhiteFive = {
//   one:
//   two:
//   three:
//   four:
//   five:
// }

const buttonBackground = (props) => {
  if (!props || !props.theme || !props.theme.primary) return '#588DC2';
  if (!props.variant) return props.theme.primary;
  let colour = '';
  switch (props.variant) {
    case 'primary':
      colour = props.theme.primary;
      break;
    case 'secondary':
      colour = props.theme.secondary;
      break;
    case 'tertiary':
      colour = props.theme.tertiary;
      break;
    default:
      colour = props.theme.primary;
      break;
  }
  return colour;
};

const PrimaryButton = styled.button`
  padding: '1rem';
  background-color: ${(props) => buttonBackground(props)};
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0);
  colour: ${(props) => props.theme.white};
  cursor: pointer;
  font-weight: 700;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
`;

export const PrimaryLinkedButton = styled(PrimaryButton).attrs({ as: 'a' })``;
export default PrimaryButton;
