import { mount } from "@vue/test-utils";
import Progress from "@/components/Progress.vue";

describe("Progress.vue", () => {
  it("renders the prop.msg when passed", ()=>{
    const wrapper = mount(Progress, {
      props: {
        msg: "Something",
      },
    });
    expect(wrapper.text()).toContain("Something")
  })
});
