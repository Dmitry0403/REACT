import css from "./styles.module.css";
import { Input } from "components/common/Input";
import { Button } from "components/common/Button";

export function TaskCard(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <div className={css.header}>
          <div className={css.header - left}>
            <Input
              className={css.header - title}
              onChange={props.onChangeTitle}
              onBlur={props.onBlurTitle}
            >
              {props.task.title}
            </Input>
            <div className={css.header - status}>
              колонка нахождения
              <span className={css.header - status_span}>
                {props.task.position}
              </span>
              <span className="icn__btneye"></span>
            </div>
          </div>
          <Button
            className={css.header - right}
            text="X"
            onClick={props.onCloseTaskCard}
          />
        </div>
        <div className={css.info - wrapper}>
          <div className={css.info - container}>
            <div className={css.info}>
              <div className={css.info - users}>
                <div className={css.info - users_title}>УЧАСТНИКИ</div>
                <div className={css.info - users_name}>{props.task.users}</div>
              </div>
              <div className={css.info - term}>
                <div className={css.info - term_title}>СРОК</div>
                <div className={css.info - term_wrapper}>
                  <div className={css.info - term_date}>{props.task.date}</div>
                </div>
              </div>
            </div>
            <div className={css.info - description}>
              <div className={css.info - description_wrapper}>
                <div className={css.info - description_title}>
                  Описание задачи
                </div>
              </div>
              <div className={css.info - description_text}>
                <Input
                  class={css.info - description_input}
                  placeholder={"Введите описание задачи!"}
                  onChange={props.onChangeDescription}
                  onBlur={props.onBlurDescription}
                >
                  {props.task.description}
                </Input>
              </div>
            </div>
            <div className={css.info - comment}>
              <div className={css.info - comment_wrapper}>
                <div className={css.info - comment_title}>Комментарий</div>
              </div>
              <div className={css.info - comment_text}>
                <Input
                  class={css.info - comment_input}
                  placeholder={"Напишите комментарий..."}
                  onChange={props.onChangeComment}
                  onBlur={props.onBlurComment}
                >
                  {props.task.comment}
                </Input>
              </div>
            </div>
          </div>
          <div className={css.action - container}>
            <ul className={css.action}>
              <div className={css.action - title}>ДОБАВИТЬ НА КАРТОЧКУ</div>
              <li>
                <Button
                  icon={"icn__btnuser"}
                  class={css.action - button}
                  onClick={props.onClickUser}
                />
              </li>
              <li>
                <Button
                  icon={"icn__btnaccess_time"}
                  class={css.action - button}
                  onClick={props.onClickDate}
                />
              </li>
            </ul>
            <ul className={css.action}>
              <div className={css.action - title}>ДЕЙСТВИЯ</div>
              <li>
                <Button
                  icon={"icn__btnarrow-right2"}
                  class={css.action - button}
                  onClick={props.onClickMoving}
                />
              </li>
              <li>
                <Button
                  icon={"icn__btnvideo_label"}
                  class={css.action - button}
                  onClick={props.onClickRemoving}
                />
              </li>
            </ul>
            <ul className={css.action}>
              <li>
                <Button
                  icon={"icn__btnattachment"}
                  class={css.action - button}
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
