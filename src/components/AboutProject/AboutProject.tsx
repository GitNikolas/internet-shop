import { FC } from 'react';
import { AboutProjectProps } from '.';
import './AboutProject.css';

export const AboutProject: FC<AboutProjectProps> = () => {
	return <section className='about-project'>
		<h2>Обо мне</h2>
		<div className='about-project__inform-table'>
			<div className='about-project__image'>тут будет моя фотка</div>
			<div className='about-project__text'>
				<p>Привет! Меня зовут Николай, я frontend-разработчик.</p>
				<p>Разрабатываю SPA-приложения на React</p>
				<p>Pet-проект "Internet Shop" - представляет собой демо-версию интернет магазина</p>
				<p>При создании pet-проекта "Internet Shop" использованы следующие технологии: React, Redux, TypeScript</p>
				<p>Бэкенд проекта написан на NodeJs-фреймворке Express, за хранение данных отвечает noSql-база данных MongoDB</p>
			</div>
		</div>
	</section>;
};
