import P404 from "../../pages/404/404";

export default {
  name: "router-error",
  title: "错误页",
  // 指定ignore熟悉，左侧菜单不会渲染，仍可以通过url访问
  ignore: true,
  children: [
    {
      path: "/404",
      component: P404
    },
  ]
}