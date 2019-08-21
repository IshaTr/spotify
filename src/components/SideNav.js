import React from "react";
import { SideNavContainer, SideNavOption, SideNavHeader } from "../styles/base";

const SideNav = props => (
  <SideNavContainer>
    <SideNavOption>
      <i class="material-icons">home</i> Home
    </SideNavOption>
    <SideNavOption>Browse</SideNavOption>
    <SideNavHeader>your library</SideNavHeader>
    <SideNavOption>Made For You</SideNavOption>
    <SideNavOption>Recently Played</SideNavOption>
    <SideNavOption>Liked Songs</SideNavOption>
    <SideNavOption>Albums</SideNavOption>
    <SideNavOption>Artists</SideNavOption>
    <SideNavOption>Podcasts</SideNavOption>
  </SideNavContainer>
);

export default SideNav;
