import css from "./styles.module.css";
import { Input } from "components/common/Input";
import { Button } from "components/common/Button";

export function TaskCard(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <div className={css.header}>
          <div className={css.headerLeft}>
            <Input
              class={css.headerTitle}
              onChange={props.onChangeTitle}
              onBlur={props.onBlurTitle}
              value={props.task.title}
            />
            <div className={css.headerStatus}>
              колонка нахождения
              <span className={css.headerStatusSpan}>
                {props.task.position}
              </span>
              <span className="icn__btneye"></span>
            </div>
          </div>
          <div>
            <Button
              class={css.headerRight}
              text="X"
              onClick={props.onCloseTaskCard}
            />
          </div>
        </div>
        <div className={css.infoWrapper}>
          <div className={css.infoContainer}>
            <div className={css.info}>
              <div className={css.infoUsers}>
                <div className={css.infoUsersTitle}>УЧАСТНИКИ</div>
                <div className={css.infoUsersName}>
                  {/* {props.task.users} */}
                </div>
              </div>
              <div className={css.infoTerm}>
                <div className={css.infoTermTitle}>СРОК</div>
                <div className={css.infoTermWrapper}>
                  <div className={css.infoTermDate}>
                    {/* {props.task.date} */}
                  </div>
                </div>
              </div>
            </div>
            <div className={css.infoDescription}>
              <div className={css.infoDescriptionWrapper}>
                <div className={css.infoDescriptionTitle}>Описание задачи</div>
              </div>
              <div className={css.infoDescriptionText}>
                <Input
                  class={css.infoDescriptionInput}
                  placeholder={"Введите описание задачи!"}
                  onChange={props.onChangeDescription}
                  onBlur={props.onBlurDescription}
                  // value={props.task.description}
                />
              </div>
            </div>
            <div className={css.infoComment}>
              <div className={css.infoCommentWrapper}>
                <div className={css.infoCommentTitle}>Комментарий</div>
              </div>
              <div className={css.infoCommentText}>
                <Input
                  class={css.infoCommentInput}
                  placeholder={"Напишите комментарий..."}
                  onChange={props.onChangeComment}
                  onBlur={props.onBlurComment}
                  // value={props.task.comment}
                />
              </div>
            </div>
          </div>
          <div className={css.actionContainer}>
            <ul className={css.action}>
              <div className={css.actionTitle}>ДОБАВИТЬ НА КАРТОЧКУ</div>
              <li>
                <Button
                  icon={"icn__btnuser"}
                  class={css.actionButton}
                  text={"Участники"}
                  onClick={props.onClickUser}
                />
              </li>
              <li>
                <Button
                  icon={"icn__btnaccess_time"}
                  class={css.actionButton}
                  text={"Дата"}
                  onClick={props.onClickDate}
                />
              </li>
            </ul>
            <ul className={css.action}>
              <div className={css.actionTitle}>ДЕЙСТВИЯ</div>
              <li>
                <Button
                  icon={"icn__btnarrow-right2"}
                  class={css.actionButton}
                  text={"Перемещение"}
                  onClick={props.onClickMoving}
                />
              </li>
              <li>
                <Button
                  icon={"icn__btnvideo_label"}
                  class={css.actionButton}
                  text={"Удаление"}
                  onClick={props.onClickRemoving}
                />
              </li>
            </ul>
            <ul className={css.action}>
              <li>
                <Button
                  icon={"icn__btnattachment"}
                  class={css.actionButton}
                  text={"Сохранить"}
                  onClick={props.onClickSaving}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
