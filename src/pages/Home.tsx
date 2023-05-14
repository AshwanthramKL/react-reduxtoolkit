import { useDispatch, useSelector } from "react-redux/es/exports";

export const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);
  return <h1>This is the Home page {username}</h1>;
};
