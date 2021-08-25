import Data from "../../pages/data/data";
import Room from "../../pages/room/room";

export default {
  name: "router-hospital",
  title: "医院模块",
  children: [
    {
      title: "院区管理",
      path: "/data",
      component: Data
    },
    {
      title: "科室管理",
      path: "/room",
      component: Room
    }
  ]
}