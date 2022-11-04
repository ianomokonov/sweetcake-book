import React, { ReactElement, useContext } from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';
import { HeaderProps } from './Header.props';
import logo from '@images/logo.png';
import { AuthContext } from '@web/_contexts/AuthContext';
import { headerConfig } from 'apps/client/src/app/layout/Header/header.config';

const headerValues = {
  logo,
  title: 'Кондитерская «Зерно»',
  product: 'ТОРТЫ И ДЕСЕРТЫ НА ЗАКАЗ',
  description: `Вкуснейшие торты для ваших важных событий 🎂
  ‌Необычные десерты, как дополнение праздничного стола ❤️
  Яркие эмоции и воспоминания 😍`,
  delivary: 'БЕСПЛАТНАЯ ДОСТАВКА ТОРТОВ ПО ГОРОДУ!',
};

export const Header = ({ className }: HeaderProps): ReactElement => {
  const { openPanel } = useContext(AuthContext);
  return (
    <>
      {/* <button
        className="btn btn-primary"
        onClick={() => openPanel(headerConfig, headerValues)}
      >
        Изменить шапку
      </button> */}
      <header className={cn(className, styles.header)}>
        <img className={styles.header__logo} src={headerValues.logo} alt="" />
        <p>{headerValues.title}</p>
        <p>{headerValues.product}</p>
        <p style={{ whiteSpace: 'pre' }}>{headerValues.description}</p>
        <b>{headerValues.delivary}</b>
      </header>
    </>
  );
};
