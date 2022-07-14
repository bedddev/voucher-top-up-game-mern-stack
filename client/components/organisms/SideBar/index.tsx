import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface SidebarProps {
  activeMenu: "overview" | "transactions" | "settings";
}

export default function SideBar(props: SidebarProps) {
  const { activeMenu } = props;
  const router = useRouter();
  const onLogOut = () => {
    Cookies.remove("token");
    router.push("/sign-in");
  };
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="icon-menu-overview"
            active={activeMenu == "overview"}
            url="/member"
          />
          <MenuItem
            title="Transactions"
            icon="icon-menu-transaction"
            url="/member/transactions"
            active={activeMenu == "transactions"}
          />
          <MenuItem title="Messages" icon="icon-menu-messages" url="/member" />
          <MenuItem title="Card" icon="icon-menu-card" url="/member" />
          <MenuItem title="Rewards" icon="icon-menu-rewards" url="/member" />
          <MenuItem
            title="Settings"
            icon="icon-menu-settings"
            url="/member/edit-profile"
            active={activeMenu == "settings"}
          />
          <MenuItem
            title="Log Out"
            icon="icon-menu-logout"
            onClick={onLogOut}
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
