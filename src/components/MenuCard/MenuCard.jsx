import css from "./styles.module.css"

export function MenuCard(props) {
  return (
    <div className={wrapperMenu}>
      <div className={menu}>
        <div className={menuHeader}>
          <div className={menuHeaderTittle}>Очистить список</div>
          <div className={menuHeaderClose}></div>
        </div>

        <ul className={menuList}>
          <li className="menu_list clrtodo"></li>
          <li className="menu_list clrinprcs"></li>
          <li className="menu_list clrdone"></li>
          <li className="menu_list clrall"></li>
        </ul>
      </div>
    </div>
  );
}
