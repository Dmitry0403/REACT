import  css  from "./styles.module.css"

export function TaskCard(props){
    return(
        <div className="wrapper__new-card">
        <div className="new__card">
        <div className="new__card-header">
            <div className="new__card-header-right">
                <textarea className="new__card-header-name user-content">Наименование новой карты</textarea>
                <div className="new__card-header-ststus">колонка нахождения
                    <span className="new__card-header-ststus-span">статус</span>
                    <span className="icn__btneye"></span>
                </div>
            </div>
            <div className="new__card-header-left close">
            </div>
        </div>
        <div className="new__card-wrapper">
            <div className="new__card-info">
                <div className="card-info__container">
                    <div className="card-info__container-users">
                        <div className="card-info__container-users-title">УЧАСТНИКИ</div>
                        <div className="card-info__container-users-icons"></div>
                    </div>
                    <div className="card-info__container-term">
                        <div className="card-info__container-term-title">СРОК</div>
                        <div className="card-info__container-term-wrapper">
                            <div className="card-info__container-term-input">
                            {/* <input type="checkbox" className="user-content"> */}

                            </div>
                            <div className="card-info__container-term-btn">
                                <span className="container-term-btn__data"></span>
                                <span className="container-term-btn__status">статус</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-info__description">
                    <div className="card-info__description-wrapper">
                        <div className="card-info__description-title">
                            <span></span>
                            Описание задачи
                        </div>
                        <div className="card-info__description-btn"></div>
                    </div>
                    <div className="card-info__description-text">
                        <textarea className="textarea-description user-content" placeholder="Введите отписание задачи!"></textarea>
                    </div>
                </div>
                <div className="card-info__actions">
                    <div className="card-info__actions-wrapper">
                        <div className="card-info__actions-title">
                            <span></span>
                            Комментарий
                        </div>
                        <div className="card-info__actions-btn"></div>
                    </div>
                    <div className="card-info__actions-text">
                        <textarea className="textarea-actions user-content" placeholder="Напишите комментарий..."></textarea>
                    </div>
                </div>
            </div>
            <div className="new__card-create">
                <div className="new__card-create-wrapper">
                    <ul className="card-create">
                        <div className="card-create__title">ДОБАВИТЬ НА КАРТОЧКУ</div>
                        <li className="card-create__button user"></li>
                        <li className="card-create__button data"></li>
                    </ul>
                    <ul className="card-create">
                        <div className="card-create__title">ДЕЙСТВИЯ</div>
                        <li className="card-create__button moving"></li>
                        <li className="card-create__button archiving"></li>
                    </ul>
                    <ul className="card-create">
                    <li className="card-create__button save"></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}