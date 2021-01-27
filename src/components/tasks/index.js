import React from 'react';
import './style.css';
import Accordion from "../accordion_builder";
import corporateSitesData from '../../consts/consts'



const Tasks = () => {

    return (
        <div className="tasks_wrapper">
            <div className="tasks_text">
                <p className="tasks_text_header">
                    Какие задачи <br />
                     мы решаем?
                </p>
                <p className="tasks_text_main">
                    Мы погружаемся в бизнес-процессы заказчика, понимаем его цели,
                    берем на себя целые направления. Поэтому с большинством клиентов
                    работаем годами. К нам обращаются, когда нуждаются в команде,
                    которая переосмыслит проект, ориентируясь на историю взаимодействия
                    пользователей с ним и на задачах бизнеса.
                </p>
            </div>
            <div className="menus_blocks">
                <Accordion
                    title={"Корпоративные сайты"}
                    data={corporateSitesData}
                    fist
                >

                </Accordion>
                <Accordion
                    title={"Интернет магазины"}
                    data={corporateSitesData}>

                </Accordion>
                <Accordion
                    title={"Веб-сервисы"}
                    data={corporateSitesData}>

                </Accordion>
                <Accordion
                    title={"Техническая и дизайн поддержка"}
                    data={corporateSitesData}>

                </Accordion>
            </div>
        </div >

    )
}

export default Tasks;