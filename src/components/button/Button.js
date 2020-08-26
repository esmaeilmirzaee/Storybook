import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import PrimaryButton from './button.styles.jsx';
import PrimaryLinkedButton from './button.styles.jsx';
import IconPlus from '../../assets/images/icons/bxs-plus-circle.svg';
import IconShoppingBag from '../../assets/images/icons/bx-shopping-bag.svg';
import IconUser from '../../assets/images/icons/bx-user.svg';
import IconCross from '../../assets/images/icons/bx-x.svg';

const Icons = {
  plus: IconPlus,
  bag: IconShoppingBag,
  user: IconUser,
  x: IconCross,
};

const Button = ({ children, href, icon, onClick, variant }) => {
  if (!href) {
    return (
      <PrimaryButton onClick={onClick} variant={variant}>
        {icon && <ButtonIcon name={icon} />}
        {children}
      </PrimaryButton>
    );
  }
  return (
    <PrimaryLinkedButton href={href} variant={variant}>
      {icon && <ButtonIcon name={icon} />}
      {children}
    </PrimaryLinkedButton>
  );
};

const ButtonIcon = ({ name }) => {
  if (Icons[name] === undefined) return null;
  const Icon = Icons[name];
  return (
    <span className='button__icon'>
      <Icon />
    </span>
  );
};

Button.propTypes = {
  children: PropTypes.isRequired,
  href: String,
  icon: String,
  onClick: PropTypes.func,
  variant: String,
};

Button.defaultProps = {
  children: 'Button Text',
  variant: 'primary',
};

export default Button;
