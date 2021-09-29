import React from "react";
import css from "./styles.module.css";
import { TASK_STATUSES } from "../App";
import { Input } from "components/common/Input";
import { Button } from "components/common/Button";
import { PortModal } from "../PortModal";
import { DateCard } from "../DateCard";
import { EventCard } from "components/EventCard/EventCard";
import { LimitCard } from "components/LimitCard/LimitCard";

export class TaskCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTitle: this.props.task.title,
      valueDescription: this.props.task.description || "",
      valueComment: this.props.task.comment || "",
      valueDate: this.props.task.date || "",
      valueUsers: this.props.task.users || "",
      isActivePortModal: false,
      component: {},
    };
  }

  handleChangeTitle = (e) => {
    this.setState({
      valueTitle: e.target.value,
    });
  };

  handleChangeDescription = (e) => {
    this.setState({
      valueDescription: e.target.value,
    });
  };

  handleChangeComment = (e) => {
    this.setState({
      valueComment: e.target.value,
    });
  };

  handleChangeDate = (e) => {
    this.setState({
      valueDate: e.target.value,
      isActivePortModal: false,
    });
  };

  handleClosePortModal = () => {
    this.setState({
      isActivePortModal: false,
    });
  };

  handleClickDate = () => {
    this.setState({
      isActivePortModal: true,
      component: (
        <DateCard
          onClickClosePortModal={this.handleClosePortModal}
          onChangeDate={this.handleChangeDate}
          value={this.state.valueDate}
        />
      ),
    });
  };

  handleClickSaving = () => {
    const activeTask = {
      title: this.state.valueTitle,
      description: this.state.valueDescription,
      comment: this.state.valueComment,
      date: this.state.valueDate,
      users: this.state.valueUsers,
      id: this.props.task.id,
    };
    this.props.onEdit(activeTask);
  };

  onClickMoving = () => {
    const tasksArray = this.props.tasksArray;
    const activePosition = this.props.task.position;
    let text;
    let position;
    switch (activePosition) {
      case TASK_STATUSES.todo:
        const tasksInProgress = tasksArray.filter(
          (task) => task.position === TASK_STATUSES.in_progress
        );
        if (tasksInProgress.length >= 6) {
          this.setState({
            isActivePortModal: true,
            component: <LimitCard onClickCancel={this.handleClosePortModal} />,
          });
          return;
        } else {
          text = "переместить в колонку IN_PROGRESS";
          position = TASK_STATUSES.in_progress;
        }
        break;
      case TASK_STATUSES.in_progress:
        text = "переместить в колонку DONE";
        position = TASK_STATUSES.done;
        break;
      case TASK_STATUSES.done:
        text = "переместить в колонку TODO";
        position = TASK_STATUSES.todo;
        break;
      default:
    }
    this.setState({
      isActivePortModal: true,
      component: (
        <EventCard
          title={"Перемещение задачи"}
          text={text}
          onClick={() => this.handleClickMoving(position)}
          onClickCancel={this.handleClosePortModal}
        />
      ),
    });
  };

  handleClickMoving = (position) => {
    const task = this.props.task;
    this.props.onEditMoving(task, position);
    this.setState({
      isActivePortModal: false,
    });
  };

  onClickRemoving = () => {
    this.setState({
      isActivePortModal: true,
      component: (
        <EventCard
          title={"Удаление"}
          text={"удалить задачу?"}
          onClick={this.handleClickRemoving}
          onClickCancel={this.handleClosePortModal}
        />
      ),
    });
  };

  handleClickRemoving = () => {
    const task = this.props.task;
    this.props.onEditRemoving(task);
    this.setState({
      isActivePortModal: false,
    });
  };

  render() {
    const component = this.state.component;
    const isActivePortModal = this.state.isActivePortModal;
    return (
      <div className={css.wrapper}>
        <div className={css.card}>
          <div className={css.header}>
            <div className={css.headerLeft}>
              <Input
                class={css.headerTitle}
                onChange={this.handleChangeTitle}
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
                    {this.state.valueUsers}
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
                    onClick={this.handleClickDate}
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
                    onClick={this.onClickMoving}
                  />
                </li>
                <li>
                  <Button
                    icon={"icn__btnvideo_label"}
                    class={css.actionButton}
                    text={"Удаление"}
                    onClick={this.onClickRemoving}
                  />
                </li>
              </ul>
              <ul className={css.action}>
                <li>
                  <Button
                    icon={"icn__btnattachment"}
                    class={css.actionButton}
                    text={"Сохранить"}
                    onClick={this.handleClickSaving}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isActivePortModal && <PortModal>{component}</PortModal>}
      </div>
    );
  }
}
