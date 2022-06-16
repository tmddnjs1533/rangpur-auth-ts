import React from 'react';
import loadable from "@loadable/component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "src/components/Header";
import init from "lang/i18n";
import { I18nextProvider } from "react-i18next";
import {
  AuthContainer,
  CloseButton,
  Footer,
  JumboText,
} from "./components/styles/AppStyles";
import font_en from "assets/fonts/NotoSansKR-Regular.woff";
import font_ko from "assets/fonts/Spartan-VariableFont_wght.woff";
import { css, Global } from "@emotion/react";
import { LoginArea } from "./components/styles/LoginStyles";
import LanguageSelect from "./components/LanguageSelect";
import { Scrollbars } from "react-custom-scrollbars";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const SignUp = loadable(() => import("src/routes/SignUp"));
const Login = loadable(() => import("src/routes/Login"));
const FindPassword = loadable(() => import("src/routes/FindPassword"));
const ChangePassword = loadable(() => import("src/routes/ChangePassword"));
const SignUpComplete = loadable(() => import("src/routes/SignUpComplete"));
const NotFound = loadable(() => import("src/routes/NotFound"));
function App() {
  const lang = window.navigator.language;
  return (<I18nextProvider i18n={init(lang)}>
      <QueryClientProvider client={queryClient}>
        <Global
          styles={css`
            @font-face {
              font-family: "font_ko";
              src: url(${font_ko});
            }
            @font-face {
              font-family: "font_en";
              src: url(${font_en});
            }
            * {
              margin: 0;
              padding: 0;
            }
            body {
              margin: 0;
              padding: 0;

              font-family: "font_ko", "Noto Sans KR", sans-serif;
              font-size: 12px;
            }
            li {
              list-style: none;
            }
            a:link,
            a:visited {
              text-decoration: none;
              color: #000;
            }
            a:hover,
            a:focus {
              color: #000;
            }
            .font_en {
              font-family: "font_en", "Spartan", sans-serif;
            }
            .font_ko {
              font-family: "font_ko", "Noto Sans KR Regular", sans-serif;
            }
            .toast_toast {
              display: flex;
              align-items: center;
              border: 1px solid #fff;
              border-radius: 15px;
              color: #fff;
            }
          `}
        />
        <Router>
          <Switch>
            <Route exact path="/not-found" component={NotFound} />
            <Route>
              <AuthContainer>
                <Header />
                <div className="auth_content">
                  <Scrollbars>
                    <JumboText>
                      <h3>Annotation Cloud Platform</h3>
                      <span>
                        Annotation Cloud Platform is a tool to create mapped
                        JSON information for Deep learning learning.
                        <br />
                        You can create new awesome project right now!
                      </span>
                    </JumboText>
                    <LoginArea>
                      <Switch>
                        <Route path="/signup">
                          <SignUp />
                        </Route>
                        <Route path="/signup-complete">
                          <SignUpComplete />
                        </Route>
                        <Route path="/find-password" component={FindPassword} />
                        <Route path="/change-password">
                          <ChangePassword />
                        </Route>
                        {/*<Route path="/locked" exact component={LockedUser} />
                        <Route
                          path="/not-allowed"
                          exact
                          component={NotAllowedUser}
                        />*/}
                        <Route path="/" exact component={Login} />
                        <Redirect to="/not-found" />
                      </Switch>
                    </LoginArea>
                    <Footer>
                      <h5>
                        Copyright &copy; 2021 HUMAN &amp; FOREST ALL RIGHT
                        RESERVED.
                      </h5>
                      <LanguageSelect />
                    </Footer>
                  </Scrollbars>
                </div>
              </AuthContainer>
            </Route>
          </Switch>
          <ToastContainer
            position="bottom-right"
            hideProgressBar={true}
            closeButton={CloseButton}
            toastClassName="toast_toast"
          />
        </Router>
      </QueryClientProvider>
    </I18nextProvider>);
}

export default App;
