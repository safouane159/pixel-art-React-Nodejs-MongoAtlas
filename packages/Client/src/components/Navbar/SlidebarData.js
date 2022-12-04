import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Acceuil",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Create My PB",
    path: "/pixelBoard",
    cName: "nav-text"
  },

  {
    title: "All Pixel Boards",
    path: "/pixelBoards",
    cName: "nav-text"
  }
];
