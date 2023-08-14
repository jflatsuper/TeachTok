import ActivityIcon from "../../../../assets/icons/ActivityIcon";
import BookMarkIcon from "../../../../assets/icons/BookMarkIcon";
import DiscoverIcon from "../../../../assets/icons/DiscoverIcon";
import HomeIcon from "../../../../assets/icons/HomeIcon";
import ProfileIcon from "../../../../assets/icons/ProfileIcon";
export const BottomNavBarRoutes = [
	{
		id: 0,
		label: 'Home',
		icon:HomeIcon,
		screen: 'Home',
        disabled:false
	},
	{
		id: 1,
		label: 'Discover',
		icon:DiscoverIcon,
		screen: 'Discover',
        disabled:true
	},
    {
		id: 2,
		label: 'Activity',
		icon:ActivityIcon,
		screen: 'Activity',
        disabled:true
	},
	{
		id: 3,
		label: 'Bookmarks',
		icon: BookMarkIcon,
		screen: 'Bookmarks',
        disabled:true
	},
	
    {
		id: 4,
		label: 'Profile',
		icon: ProfileIcon,
		screen: 'Profile',
        disabled:true
	},
];
