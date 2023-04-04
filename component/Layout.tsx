import styled from "styled-components";
import { PropsWithChildren } from "react";

interface Props {}

const Layout = ({ children }: PropsWithChildren<Props>) => {
  return <Main>{children}</Main>;
};

export default Layout;

const Main = styled.main`
  height: 100%;
  padding-top: 40px;
`;
