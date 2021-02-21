import { Box, Flex } from "@chakra-ui/react";
import Nav from "./components/Nav";
import OptionsBar from "./components/OptionsBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Manga from "./components/Manga";
import Genre from "./components/Genre";
import SearchBar from "./containers/SearchBar";
import { useState } from "react";
const App = () => {
  const [quary, setQuary] = useState("");
  const [isSearching, setIsSearching] = useState(false)
  return (
    <Router>
      <Flex direction="column" align="center">
        <Box display={isSearching ? "block" : "none"}>
          <SearchBar value={quary} changeValue={setQuary} />
        </Box>
        <Nav search={isSearching} changeSearch={setIsSearching}/>
        <OptionsBar />
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/manga">
            <Manga />
          </Route>
          <Route path="/manga-genre/:genre">
            <Genre />
          </Route>
        </Switch>
      </Flex>
    </Router>
  );
};

export default App;
