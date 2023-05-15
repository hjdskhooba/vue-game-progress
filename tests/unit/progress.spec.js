import { mount } from "@vue/test-utils";
import Progress from "@/components/Progress.vue";

describe("Progress", () => {
  it("renders the progress component correctly", () => {
    const wrapper = mount(Progress) 
    
    expect(wrapper.exists()).toBe(true);
  });
});
