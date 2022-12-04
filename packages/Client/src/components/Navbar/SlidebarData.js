import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


export const SidebarData = [
  {
    title: "Accueil",
    path: "/pixelBoards",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Create My PB",
    path: "/pixelBoard",
    icon: <AiIcons.AiOutlineEdit />,
    cName: "nav-text"
  },

  {
    title: "All Pixel Boards",
    path: "/pixelBoards",
    icon: <AiIcons.AiFillFileImage />,
    cName: "nav-text"
  }
];
