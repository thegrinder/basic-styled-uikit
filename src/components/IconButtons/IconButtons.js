import iconButtonFactory from './iconButtonFactory';
import CloseIcon from './icons/close_icon.inline.svg';
import TrashIcon from './icons/trash_icon.inline.svg';
import PencilIcon from './icons/pencil_icon.inline.svg';

export const CloseBtn = iconButtonFactory(CloseIcon, { iconSize: 14 });
export const TrashBtn = iconButtonFactory(TrashIcon);
export const PencilBtn = iconButtonFactory(PencilIcon);
