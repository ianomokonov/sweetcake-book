import React, { ReactElement, useContext, useState } from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';
import { HeaderProps } from './Header.props';
import { AuthContext } from '../../_contexts/AuthContext';
import { headerConfig } from './header.config';

const headerValuesData = {
  logo: '/assets/images/logo.png',
  title: 'Кондитерская «Зерно»',
  product: 'ТОРТЫ И ДЕСЕРТЫ НА ЗАКАЗ',
  description: `Вкуснейшие торты для ваших важных событий 🎂
  ‌Необычные десерты, как дополнение праздничного стола ❤️
  Яркие эмоции и воспоминания 😍`,
  delivary: 'БЕСПЛАТНАЯ ДОСТАВКА ТОРТОВ ПО ГОРОДУ!',
};

export const Header = ({ className }: HeaderProps): ReactElement => {
  const { openPanel, panelConfig } = useContext(AuthContext);
  const [headerValues, setHeaderValues] = useState(headerValuesData);
  return (
    <header className={cn(className, styles.header)}>
      {!panelConfig && (
        <button
          className="btn btn-primary"
          onClick={() =>
            openPanel(
              headerConfig(),
              async (value) => {
                Object.keys(headerValues).forEach((key) => {
                  if (key == 'logo') {
                    return;
                  }
                  headerValues[key as keyof typeof headerValues] = value[key];
                });
                setHeaderValues(headerValues);
              },
              (value) => {
                Object.keys(headerValues).forEach((key) => {
                  if (key == 'logo') {
                    return;
                  }
                  headerValues[key as keyof typeof headerValues] = value[key];
                });
                setHeaderValues({ ...headerValues });
              },
              headerValues
            )
          }
        >
          Изменить шапку
        </button>
      )}
      <img className={styles.header__logo} src={headerValues.logo} alt="" />
      <p>{headerValues.title}</p>
      <p>{headerValues.product}</p>
      <p style={{ whiteSpace: 'pre' }}>{headerValues.description}</p>
      <b>{headerValues.delivary}</b>
    </header>
  );
};
