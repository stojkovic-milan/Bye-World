import "./App.css";
import { ThemeProvider, createTheme, Box } from "@mui/material";
import { Route, Routes } from "react-router";
import { SignUp } from "./components/SignUp/Signup";
import { SignIn } from "./components/SignIn/Signin";
import { UserProvider } from "./contexts/user.context";
import { Listings } from "./components/Listings/ListingsPage";
import { Navbar } from "./components/common/Navbar/Navbar";
import { Home } from "./components/Home/Home";
<<<<<<< HEAD
import NotFound from "./components/NotFound/NotFound";
import CompaniesPage from "./components/CompaniesPage/CompaniesPage";
=======
import User from "./components/user/User";
>>>>>>> ab675129d6d73935dabf7e403c6cd74afa42fe07

const theme = createTheme({
  palette: {
    primary: {
      light: "#fbc02d",
      main: "#311b92",
      dark: "#000063",
    },
    secondary: {
      light: "#fbc02d",
      main: "#ffd54f",
      dark: "#000063",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Box className="App">
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="" element={<Home />}></Route>
              <Route path="/listings" element={<Listings />}></Route>
              <Route path="/companies" element={<CompaniesPage />}></Route>
              <Route path="*" element={<NotFound />}></Route>
              <Route path="/user/:id" element={<User />}></Route>
            </Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        </Box>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
