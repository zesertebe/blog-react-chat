import {IconType} from 'react-icons';
import '../styles/MenuButton.css';

type MenuButtonProps = {
	Icon: IconType;
	text: string;
	selected?: boolean;
	clickFunc?: ()=>void;
}

const MenuButton = ({Icon, text, selected, clickFunc}: MenuButtonProps) => {
	return (
		<button onClick={clickFunc} className={`MenuButton ${selected ? 'MenuButton__selected':''}`}>
			<Icon/>
			<div className="MenuButton__tooltip">
			{text}
			</div>
		</button>
	)
}
export default MenuButton;
