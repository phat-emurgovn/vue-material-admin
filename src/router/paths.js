export default [
  {
    path: "*",
    meta: {
      public: true
    },
    redirect: {
      path: "/404"
    }
  },
  {
    path: "/404",
    meta: {
      public: true
    },
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/NotFound.vue`)
  },
  {
    path: "/403",
    meta: {
      public: true
    },
    name: "AccessDenied",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Deny.vue`)
  },
  {
    path: "/500",
    meta: {
      public: true
    },
    name: "ServerError",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Error.vue`)
  },
  {
    path: "/login",
    meta: {
      public: true
    },
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Login.vue`)
  },
  {
    path: "/",
    meta: {},
    name: "Root",
    redirect: {
      name: "Dashboard"
    }
  },
  {
    path: "/dashboard",
    meta: { breadcrumb: true },
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Dashboard.vue`)
  },
  {
    path: "/components/avatar",
    meta: { breadcrumb: true },
    name: "components/avatars",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/ui/Avatar.vue`)
  },
  {
    path: "/components/button",
    meta: { breadcrumb: true },
    name: "components/buttons",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/ui/Button.vue`)
  },
  {
    path: "/components/parallax",
    meta: { breadcrumb: true },
    name: "components/parallax",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/ui/Parallax.vue`)
  },
  {
    path: "/components/snackbar",
    meta: { breadcrumb: true },
    name: "components/snackbar",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/ui/Snackbar.vue`)
  },
  {
    path: "/components/card",
    meta: { breadcrumb: true },
    name: "components/cards",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/ui/Cards.vue`)
  },
  {
    path: "/components/table",
    meta: { breadcrumb: true },
    name: "components/tables",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/ui/Tables.vue`)
  },
  {
    path: "/components/carousel",
    meta: { breadcrumb: true },
    name: "components/carousels",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/ui/Carousels.vue`)
  },
  {
    path: "/components/progress",
    meta: { breadcrumb: true },
    name: "components/progress",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/ui/Progress.vue`)
  },
  {
    path: "/components/slider",
    meta: { breadcrumb: true },
    name: "components/sliders",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/ui/Slider.vue`)
  },
  {
    path: "/components/tooltip",
    meta: { breadcrumb: true },
    name: "components/tooltips",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/ui/Tooltip.vue`)
  },
  {
    path: "/components/typography",
    meta: { breadcrumb: true },
    name: "components/typography",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/ui/Typography.vue`)
  },
  {
    path: "/components/color",
    meta: { breadcrumb: true },
    name: "components/color",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/ui/Colors.vue`)
  },
  {
    path: "/layout/bottomsheets",
    meta: { breadcrumb: true },
    name: "components/bottom-sheets",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/layout/BottomSheets.vue`)
  },
  {
    path: "/layout/expansion-panel",
    meta: { breadcrumb: true },
    name: "components/expansion-panels",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/layout/ExpansionPanels.vue`)
  },
  {
    path: "/layout/footer",
    meta: { breadcrumb: true },
    name: "components/footer",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/layout/Footers.vue`)
  },
  {
    path: "/layout/timeline",
    meta: { breadcrumb: true },
    name: "components/timeline",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/layout/Timeline.vue`)
  },
  {
    path: "/layout/list",
    meta: { breadcrumb: true },
    name: "components/lists",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/layout/Lists.vue`)
  },
  {
    path: "/layout/toolbar",
    meta: { breadcrumb: true },
    name: "components/toolbar",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/layout/Toolbar.vue`)
  },
  {
    path: "/layout/jumbotron",
    meta: { breadcrumb: true },
    name: "components/jumbotrons",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/layout/Jumbotrons.vue`)
  },
  {
    path: "/layout/menu",
    meta: { breadcrumb: true },
    name: "components/menus",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/layout/Menus.vue`)
  },
  {
    path: "/layout/navigation-drawer",
    meta: { breadcrumb: true },
    name: "components/navigation-drawers",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/layout/NavigationDrawers.vue`)
  },
  {
    path: "/layout/tabs",
    meta: { breadcrumb: true },
    name: "components/tabs",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/layout/Tabs.vue`)
  },
  {
    path: "/forms/basic",
    meta: { breadcrumb: true },
    name: "components/basic-forms",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/form/BasicForms.vue`)
  },
  {
    path: "/forms/selects",
    meta: { breadcrumb: true },
    name: "components/selects",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/form/Selects.vue`)
  },
  {
    path: "/forms/editor",
    meta: { breadcrumb: true },
    name: "components/editors",
    component: () => import(`@/views/form/Editors.vue`)
  },
  {
    path: "/forms/selection-controls",
    meta: { breadcrumb: true },
    name: "components/selection-controls",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/form/SelectionControls.vue`)
  },
  {
    path: "/forms/text-fields",
    meta: { breadcrumb: true },
    name: "components/text-fields",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/form/TextFields.vue`)
  },
  {
    path: "/forms/steppers",
    meta: { breadcrumb: true },
    name: "components/steppers",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/form/Steppers.vue`)
  },
  {
    path: "/widgets/statistic",
    meta: { breadcrumb: true },
    name: "components/statistic",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/widgets/Statistic.vue`)
  },
  {
    path: "/widgets/chart",
    meta: { breadcrumb: true },
    name: "components/chart",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/widgets/Chart.vue`)
  },
  {
    path: "/widgets/list",
    meta: { breadcrumb: true },
    name: "components/widget-list",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/widgets/List.vue`)
  },
  {
    path: "/orders",
    meta: { breadcrumb: true },
    name: "orders",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/orders/OrdersList.vue`)
  },
  {
    path: "/users",
    meta: { breadcrumb: true },
    name: "users",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/users/UsersList.vue`)
  },
  {
    path: "/profile",
    meta: { breadcrumb: true },
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/orders/OrdersList.vue`)
  },
  {
    path: "/password",
    meta: { breadcrumb: true },
    name: "changePassword",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/orders/OrdersList.vue`)
  },
  {
    path: "/crypto-currencies",
    meta: { breadcrumb: true },
    name: "cryptoCurrencies",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/orders/OrdersList.vue`)
  },
  {
    path: "/admin-users",
    meta: { breadcrumb: true },
    name: "adminUsers",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/orders/OrdersList.vue`)
  }
];
