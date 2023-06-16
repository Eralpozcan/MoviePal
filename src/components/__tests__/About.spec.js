import { describe, it } from 'vitest'
import About from '@/components/About.vue'
import { mount } from '@vue/test-utils'
import { useMovieStore } from '@/stores/index'

describe('About Components', () => {
  it('should render About component', () => {
    const wrapper = mount(About, {
      mocks: {
        $t: (msg) => { msg }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
