import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

export const FacebookIcon: React.FC<IconProps> = props => (
  <Icon viewBox="0 0 128 128" {...props}>
    <circle cx="64" cy="64" fill="#176AE6" r="64" />
    <path
      d="M87.308,81.011l2.738-16.756h-19.39V51.479c0-5.276,1.415-9.029,8.981-9.029l11.2,0.005V25.559    c0,0-7.108-1.559-13.776-1.559c-13.915,0-23.124,9.19-23.124,24.79v15.466H37.162v16.756h16.771v46.193    c3.281,0.519,6.642,0.795,10.067,0.795c2.248,0,4.468-0.119,6.656-0.345V81.011H87.308z"
      fill="#FFFFFF"
    />
  </Icon>
);
