// eslint-disable-next-line @typescript-eslint/no-unused-vars
import store from "@/store/index";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    count: number;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
