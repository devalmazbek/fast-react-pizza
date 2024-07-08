import { useLoaderData } from "react-router-dom";

import MenuItem from "./MenuItem";

import { getMenu } from "../../services/apiRestaurant";

function Menu() {
    const data = useLoaderData();
    return <ul>
      {data.map((pizza) => <MenuItem pizza={pizza} key={pizza.id}/>)}
    </ul>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

  
export default Menu;