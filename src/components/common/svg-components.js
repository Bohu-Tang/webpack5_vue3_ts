import SvgIcon from '@/components/common/svgIcon.vue' // svg组件

const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', false, /\.svg$/)
requireAll(req)

export default function svgIconRegistered(app) {
  app.component('SvgIcon', SvgIcon)
}
