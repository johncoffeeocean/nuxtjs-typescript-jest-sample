// import { mount } from '@vue/test-utils'
// import Logo from '@/components/Logo.vue'
import { sampleJs } from '@/src/utils/sample-js'
import { sampleTs } from '@/src/utils/sample-ts'

describe('Logo', () => {
  // test('is a Vue instance', () => {
  //   const wrapper = mount(Logo)
  //   expect(wrapper.isVueInstance()).toBeTruthy()
  //   expect(wrapper.isVueInstance()).toBeTruthy()
  // })
  test('', () => {
    expect(true).toBeTruthy()
  })
  test('sample js', () => {
    expect(sampleJs()).toBe(1)
  })
  test('sample ts', () => {
    expect(sampleTs()).toBe(1)
  })
})
