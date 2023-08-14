import BookMark from "../../../../assets/icons/BookMarkIcon";
import CommentIcon from "../../../../assets/icons/CommentIcon";
import HeartIcon from "../../../../assets/icons/HeartIcon";
import PostIcon from "../../../../assets/icons/PostIcon";
import ShareIcon from "../../../../assets/icons/ShareIcon";
import { ActionItemProps } from "../../../../types/actionTypes";
const placeHolder = () => {
    /**
     * placeholder function
     */
};
const ActionItems: ActionItemProps[] = [
  {
    Icon: PostIcon,
    onPress: placeHolder,
  },
  {
    Icon: HeartIcon,
    label: "40",
    onPress: placeHolder,
  },
  {
    Icon: CommentIcon,
    label: "59",
    onPress: placeHolder,
  },
  {
    Icon: BookMark,
    label: "59",
    onPress: placeHolder,
  },
  {
    Icon: ShareIcon,
    label: "59",
    onPress: placeHolder,
  },
];
export { ActionItems };
