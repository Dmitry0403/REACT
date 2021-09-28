import css from "./styles.module.css";
import { Input } from "components/common/Input";
import { Button } from "components/common/Button";
import React from "react";

export class TaskCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTitle: this.props.task.title,
      valueDescription: this.props.task.description || "",
      valueComment: this.props.task.comment || "",
      valueDate: this.props.task.date || "",
    };
  }

  handleChangeTitle = (e) => {
    this.setState({
      valueTitle: e.target.value,
    });
  };

  handleBlurTitle = () => {
    this.props.onEdit(this.state.valueTitle, this.props.task.id, "title");
  };

  handleChangeDescription = (e) => {
    this.setState({
      valueDescription: e.target.value,
    });
  };

  handleBlurDescription = () => {
    this.props.onEdit(
      this.state.valueDescription,
      this.props.task.id,
      "description"
    );
  };

  handleChangeComment = (e) => {
    this.setState({
      valueComment: e.target.value,
    });
  };

  handleBlurComment = () => {
    this.props.onEdit(this.state.valueComment, this.props.task.id, "comment");
  };

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.card}>
          <div className={css.header}>
            <div className={css.headerLeft}>
              <Input
                class={css.headerTitle}
                onChange={this.handleChangeTitle}
                onBlur={this.handleBlurTitle}
                value={this.state.valueTitle}
              />
              <div className={css.headerStatus}>
                колонка нахождения
                <span className={css.headerStatusSpan}>
                  {this.props.task.position}
                </span>
                <span className="icn__btneye"></span>
              </div>
            </div>
            <div>
              <Button
                class={css.headerRight}
                text="X"
                onClick={this.props.onCloseTaskCard}
              />
            </div>
          </div>
          <div className={css.infoWrapper}>
            <div className={css.infoContainer}>
              <div className={css.info}>
                <div className={css.infoUsers}>
                  <div className={css.infoUsersTitle}>УЧАСТНИКИ</div>
                  <div className={css.infoUsersName}>
                    {this.props.task.users || ""}
                  </div>
                </div>
                <div className={css.infoTerm}>
                  <div className={css.infoTermTitle}>СРОК</div>
                  <div className={css.infoTermWrapper}>
                    <div className={css.infoTermDate}>
                      {this.state.valueDate}
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.infoDescription}>
                <div className={css.infoDescriptionWrapper}>
                  <div className={css.infoDescriptionTitle}>
                    Описание задачи
                  </div>
                </div>
                <div className={css.infoDescriptionText}>
                  <Input
                    class={css.infoDescriptionInput}
                    placeholder={"Введите описание задачи!"}
                    onChange={this.handleChangeDescription}
                    onBlur={this.handleBlurDescription}
                    value={this.state.valueDescription}
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
                    onChange={this.handleChangeComment}
                    onBlur={this.handleBlurComment}
                    value={this.state.valueComment}
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
                    onClick={this.props.onClickUser}
                  />
                </li>
                <li>
                  <Button
                    icon={"icn__btnaccess_time"}
                    class={css.actionButton}
                    text={"Дата"}
                    onClick={this.props.onClickDate}
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
                    onClick={this.props.onClickMoving}
                  />
                </li>
                <li>
                  <Button
                    icon={"icn__btnvideo_label"}
                    class={css.actionButton}
                    text={"Удаление"}
                    onClick={this.props.onClickRemoving}
                  />
                </li>
              </ul>
              <ul className={css.action}>
                <li>
                  <Button
                    icon={"icn__btnattachment"}
                    class={css.actionButton}
                    text={"Сохранить"}
                    onClick={this.props.onClickSaving}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
