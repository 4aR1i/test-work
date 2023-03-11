import React from 'react';
import { Link } from 'react-router-dom';
import SidebarSVG from '../../SVG/SidebarSVG';

import './sidebar.scss';

const sidebarSections = [
  { id: 1, icon: 'results', title: 'Итоги' },
  { id: 2, icon: 'orders', title: 'Заказы' },
  { id: 3, icon: 'messages', title: 'Сообщения' },
  { id: 4, icon: 'calls', title: 'Звонки' },
  { id: 5, icon: 'counterparties', title: 'Контрагенты' },
  { id: 6, icon: 'documents', title: 'Документы' },
  { id: 7, icon: 'performers', title: 'Исполнители' },
  { id: 8, icon: 'reports', title: 'Отчеты' },
  { id: 9, icon: 'knowledge base', title: 'База знаний' },
  { id: 10, icon: 'settings', title: 'Настройки' },
];

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<number | null>(
    +localStorage.getItem('active-section') ? +localStorage.getItem('active-section') : 1,
  );

  const selectSection = (id: number) => {
    setActiveSection(id);
    localStorage.setItem('active-section', id.toString());
  };

  return (
    <div className="sidebar">
      <Link to="/">
        <div className="sidebar__logo">
          <SidebarSVG id={'logo'} />
        </div>
      </Link>
      <div className="sidebar__menu menu">
        {sidebarSections.map((section) => (
          <Link key={section.id} to={`/${section.icon}`} onClick={() => selectSection(section.id)}>
            <div
              className={`menu__section ${
                section.id === activeSection ? 'section-active' : 'section'
              }`}
            >
              <div
                className={`${
                  section.id === activeSection ? 'section-active__icon' : 'section__icon'
                }`}
              >
                <SidebarSVG id={section.icon} />
              </div>
              <p
                className={`${
                  section.id === activeSection ? 'section-active__title' : 'section__title'
                }`}
              >
                {section.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
