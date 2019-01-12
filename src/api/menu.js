const Menu = [
  {header: "Apps"},
  {
    title: "Dashboard",
    group: "apps",
    icon: "dashboard",
    name: "Dashboard"
  },
  {
    title: "Orders",
    group: "apps",
    icon: "receipt",
    name: "orders"
  },
  {
    title: "Users",
    group: "apps",
    icon: "contacts",
    name: "users"
  },
  {header: "Profile"},
  {
    title: "Update profile",
    group: "profile",
    icon: "person",
    name: "profile"
  },
  {
    title: "Update password",
    group: "profile",
    icon: "security",
    name: "changePassword"
  },
  {divider: true},

  {header: "System"},
  {
    title: "Admin users",
    group: "system",
    icon: "supervised_user_circle",
    name: "adminUsers"
  },
  {
    title: "Crypto currencies",
    group: "system",
    icon: "attach_money",
    name: "cryptoCurrencies"
  }
];
// reorder menu
Menu.forEach(item => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }
});

export default Menu;
