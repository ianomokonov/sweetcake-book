import { CategoryEntity } from '@interfaces/category/entities/category.entity';
import { PillBtn } from '@web/components/pill-btn/PillBtn';
import { Separator } from '@web/components/separator/Separator';
import { CategoryService } from '@web/_services/category.service';
import { ReactElement, useContext, useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from '../../layout/Header/Header';
import styles from './Main.module.scss';
import heart from '@images/heart.svg';
import inst from '@images/instagram.svg';
import { TogglePanel } from '@web/components/toggle-panel/TogglePanel';

export const Main = (): ReactElement => {
  const categoryService = useMemo(() => new CategoryService(), []);
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  useEffect(() => {
    categoryService.find().then((res) => {
      setCategories(res);
    });
  }, [categoryService]);
  return (
    <div className="page-container py-5">
      <div className={styles.main__header}>
        <Header className={styles.header} />
      </div>
      <Separator img={heart}></Separator>
      <div className={styles.main__body}>
        <p>Наш ассортимент 👇🏻</p>
        {categories.map((c) => (
          <NavLink to={`/category/${c.id}`} key={c.id}>
            <PillBtn
              img="https://taplink.st/p/c/6/0/5/35279297.jpg?0"
              className={styles.category}
            >
              {c.name}
            </PillBtn>
          </NavLink>
        ))}
        <Separator img={heart} hasFading></Separator>
        <a href="https://instagram.com/sweetcake.book?igshid=YmMyMTA2M2Y=">
          <PillBtn smImg={true} img={inst}>
            Instagram
          </PillBtn>
        </a>
      </div>
      <div className={styles.main__footer}>
        <TogglePanel title="За сколько дней нужно сделать заказ?">
          Заказ можно сделать минимум за 2−3 дня, но чем раньше вы определитесь,
          тем лучше ☺️
        </TogglePanel>
        <TogglePanel title="Можно ли будет оформить торт по нашему желанию?">
          Да! Мы с радостью воплотим вашу идею и сделаем торт о котором вы
          мечтали
        </TogglePanel>
        <TogglePanel title="Возможна ли доставка?">
          Да, мы можем доставить торт в удобное для Вас место! Доставка тортов
          по городу бесплатна.
        </TogglePanel>
        <TogglePanel title="Как сделать заказ?">
          1.Зайдите в нужный раздел и оформите заказ по кнопке, которая
          находится под каждой позицией <br />
          2.Напишите нам в Инстаграмм @bakeryzerno
          <br />
          3.Позвоните нам по телефону 48-01-48
          <br />
          4.Подойдите в нашу кондитерскую и сделайте заказ на месте
          <br />
        </TogglePanel>
        <TogglePanel title="Как вас найти?">
          Наш адрес — ул. Карла Маркса 80, кофейня «Зерно»
        </TogglePanel>
      </div>
    </div>
  );
};
