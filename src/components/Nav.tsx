import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  IconButton,
} from "@chakra-ui/react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
interface navItemI {
  name: string;
  link: string;
}
interface NavProps {
  search: boolean;
  changeSearch: (value: boolean) => void;
}
const Nav = ({ search, changeSearch }: NavProps) => {
  const navItems: navItemI[] = [
    { name: "Home", link: "/" },
    { name: "Manga list", link: "/manga" },
    { name: "Manhwa", link: "/manga-genre/manhwa" },
    { name: "Manhua", link: "/manga-genre/manhua" },
    { name: "Novel List", link: "/manga-genre/novel" },
  ];
  return (
    <Flex
      bgColor="green.500"
      w="100vw"
      h="8rem"
      direction="row"
      align="center"
      wrap="wrap"
      justify="center"
    >
      <Box>
        <Link to="/">
          <Image w="8rem" h="4rem" src={logo} alt="logo image" />
        </Link>
      </Box>
      <Breadcrumb separator="" spacing="2rem" mr="6rem" ml="6rem">
        {navItems.map((item: navItemI) => (
          <BreadcrumbItem key={item.name}>
            <BreadcrumbLink
              href={item.link}
              color="#FFFFFF"
              fontSize="1.2rem"
              fontWeight="bold"
            >
              {item.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <IconButton
        aria-label="search"
        onClick={() => changeSearch(!search)}
        icon={<GoSearch />}
        borderRadius="2rem"
      />
    </Flex>
  );
};

export default Nav;
