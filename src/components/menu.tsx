import {useEffect, useState} from 'react';
import 	{BsFillChatRightFill, BsFillDice5Fill, BsPersonFill} from 'react-icons/bs';
import '../styles/Menu.css';
import MenuButton from './menu-button';
import MenuChildren from './menu-chidlren';

const Menu = () => {
	const [selected, setSelected] = useState<{[key: number]: boolean}>({0: true, 1:false, 2:false});
	const TogglePanel = (index: number) =>{
		if(!selected[index]){
			setSelected((selected) => ({
				...selected,
				[index]: true,
			}))
		}
		setSelected((selected)=>({
			...( Object.keys(selected).reduce((a,b)=>({
					...a,
					[b]: false 
				}), {})
			),
			[index]: selected[index],
		}));
	}
	return (
		<div className="Menu">
			<div className="MenuItems">
				<MenuButton clickFunc={() => {TogglePanel(0)}} Icon={BsFillChatRightFill} selected={selected[0]} text="Chats" />
				<MenuButton clickFunc={() => {TogglePanel(1)}} Icon={BsFillDice5Fill} text="Aleatorio" selected={selected[1]} />
				<MenuButton clickFunc={() => {TogglePanel(2)}} Icon={BsPersonFill} text="Usuario" selected={selected[2]} />
			</div>
			<div className="MenuChildren">
				<MenuChildren selected={selected[0]}>
				<h2>
					Chats
				</h2>
				</MenuChildren>
				<MenuChildren selected={selected[3]}>
				<h2>
					Random	
				</h2>
				</MenuChildren>
				<MenuChildren selected={selected[2]}>
				<h2>
					User	
				</h2>
				</MenuChildren>
			</div>
		</div>
	)
}

export default Menu;
